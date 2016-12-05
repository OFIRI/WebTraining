$ = function (queryStr) {
    return new ofekQuery(queryStr)
};

var ofekQuery = function (query) {
    this.elements = [];
    
    if (!isQueryEmpty(query)) {
        return;
    }

    var queryList = query.split(" ");
    var elements = [document];

    queryList.forEach(function (currQuery) {
        var newElements = [];

        elements.forEach(function (currElement) {
            newElements = newElements.concat(handleQueryList(currQuery, currElement, newElements))
        });

        elements = newElements;
    });

    this.elements = elements;
};

var isQueryEmpty = function (query) {
    if ((typeof query !== "string") ||
        (query === null) ||
        (query === undefined) ||
        (query === "")) {
        return false;
    }
    return true;
};

var handleQueryList = function (query, rootElement, previousElements) {
    var elements = [];
    var newElementArray = [];

    if (query.charAt(0) === "#") {
        var newElementById = document.getElementById(query.slice(1));
        if (newElementById !== null) {
            newElementArray.push(newElementById);
        }
    } else if (query.charAt(0) === ".") {
        newElementArray = makeArrayFromNodeList(rootElement.getElementsByClassName(query.slice(1)));
    } else {
        newElementArray = makeArrayFromNodeList(rootElement.getElementsByTagName(query));
    }

    newElementArray.forEach(function (element) {
        var duplicatedElement = false;

        previousElements.forEach(function (prevElement) {
            if (element === prevElement) {
                duplicatedElement = true;
            }
        });

        if (duplicatedElement === false) {
            elements.push(element);
        }
    });

    return elements;
};

var makeArrayFromNodeList = function (nodeList) {
    var arr = [];

    for (var i = 0; i < nodeList.length; i++) {
        arr.push(nodeList[i]);
    }

    return arr;
};

ofekQuery.prototype = {
    addClass: function (class_name) {
        this.each(function (element) {
            element.classList.add(class_name)
        });

        return this;
    },

    removeClass: function (class_name) {
        this.each(function (element) {
            element.classList.remove(class_name)
        });

        return this;
    },

    each: function (func) {
        this.elements.forEach(function (element, index, arr) {
            func(element, index, arr)
        })
    },

    map: function (func) {
        var new_arr = [];
        this.elements.forEach(function (element, index, arr) {
            new_arr.push(func(element, index, arr))
        });
        this.elements = new_arr;

        return this;
    },

    any: function () {
        var predicates = Array.prototype.slice.call(arguments);
        var any_flag = false;
        this.elements.forEach(function (element) {
            var predicates_flag = true;
            predicates.forEach(function (func) {
                if (!func(element)) {
                    predicates_flag = false;
                    return false
                }
            });
            if (predicates_flag) {
                any_flag = true;
                return false
            }
        });

        return any_flag;
    },

    all: function () {
        var predicates = Array.prototype.slice.call(arguments);
        var all_flag = true;
        this.elements.forEach(function (element, index, arr) {
            var predicates_flag = true;
            predicates.forEach(function (func) {
                if (!func(element)) {
                    predicates_flag = false;
                    return false
                }
            });
            if (!predicates_flag) {
                all_flag = false;
                return false
            }
        });

        return all_flag;
    },

    filter: function () {
        var predicates = Array.prototype.slice.call(arguments);
        var filtered = [];
        this.elements.forEach(function (element, index, arr) {
            var predicates_flag = true;
            predicates.forEach(function (func) {
                if (!func(element)) {
                    predicates_flag = false;
                    return false
                }
            });
            if (predicates_flag) {
                filtered.push(element)
            }
        });
        var newOfekQuery = $();
        newOfekQuery.elements = filtered;

        return newOfekQuery;
    },

    css: function (property, value) {
        this.each(function (element) {
            element.style.cssText = property + ":" + value;
        });

        return this;
    },

    count: function () {
        return this.elements.length;
    },

    appendChild: function (childElement) {
        this.elements.forEach(function (element) {
            element.appendChild(childElement)
        })
    },

    getAttribute: function (attrName) {
        var resultAttrs = [];
        this.elements.forEach(function (element) {
            resultAttrs.push(element[attrName])
        });

        return resultAttrs;
    },

    setAttribute: function (attrName, attrValue) {
        this.elements.forEach(function (element) {
            element[attrName] = attrValue
        });
    },

    get: function (index) {
        return this.elements[index];
    }
};