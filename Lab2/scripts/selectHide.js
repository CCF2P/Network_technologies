/*let prevValue1 = 0;
let prevValue2= 0;
let prevValue3= 0;


function treeTraversal(root, value, flag) {
    let cur = root;
    while (cur !== null) {
        if (cur.nodeName === 'OPTION') {
            if (cur.getAttribute('value') === value) {
                cur.setAttribute('hidden', flag.toString());
            }
        }

        // tree traversal
        if (cur.firstElementChild !== null) {
            cur = cur.firstElementChild;
        } else if (cur.nextElementSibling !== null) {
            cur = cur.nextElementSibling;
        } else if (cur.parentElement.nextElementSibling !== root.nextElementSibling) {
            cur = cur.parentElement.nextElementSibling;
        } else {
            cur = null;
        }
    }
}


function hideElement(value1, value2, value3, number) {
    let s = document.getElementById('sort').getElementsByTagName('SELECT');
    for (let i = 0; i < s.length; i++) {
        if (i !== number - 1) {
            if (number === 1)
                treeTraversal(s[i], value1, true);

            if (number === 2)
                treeTraversal(s[i], value2, true);

            if (number === 3)
                treeTraversal(s[i], value3, true);

            if (prevValue1 !== value1) {
                treeTraversal(s[i], prevValue1, false);
            }

            if (prevValue2 !== value2) {
                treeTraversal(s[i], prevValue1, false);
            }

            if (prevValue3 !== value3) {
                treeTraversal(s[i], prevValue1, false);
            }
        }
    }

    prevValue1 = value1;
    prevValue2 = value2;
    prevValue3 = value3;
}*/