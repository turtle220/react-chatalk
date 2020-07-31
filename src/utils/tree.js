export function makeTree(arr, idOfName, parentIdOfName) {
    const tree = (currParentId) => {
        const ret = [];
        for (const ele of arr.filter((node) => node[parentIdOfName] === currParentId)) {
            const children = tree(ele[idOfName]);
            if (children.length > 0) ele.children = children;
            ret.push(ele);
        }
        return ret;
    };
    return tree(0);
}
