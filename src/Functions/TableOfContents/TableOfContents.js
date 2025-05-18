/**
 * @param {Document} doc
 * @return {string}
 */
export default function tableOfContents(doc) {
    const res = [];
    const matchTag = /^h([1-6])$/i;

    const renderContent = (list) => {
        if (!list.length) return '';

        let str = "<ul>"
        for (const item of list) {
            if (!item.children?.length) {
                str += `<li>${item.text}</li>`
            } else {
                str += `<li>${item.text}`;
                str += renderContent(item.children);
                str += `</li>`;
            }
        }

        return str + "</ul>"
    }


    const appendTag = (list, level, text) => {
        const lastIndex = list.length - 1;
        if (lastIndex < 0 || level === list[lastIndex].level) {
            list.push({ level, text });
            return;
        }

        if (level > list[lastIndex].level) {
            if (!list[lastIndex].children) {
                list[lastIndex].children = [];
            }
            appendTag(list[lastIndex].children, level, text);
        }
    }

    const traverse = (root) => {
        if (!root) return;
        if (matchTag.test(root.tagName)) {
            appendTag(res, root.tagName.match(matchTag)[1], root.textContent)
            return;
        }
        if (root.childNodes) {
            for (const child of root.childNodes) {
                traverse(child);
            }
        }
    }
    traverse(doc, res);

    console.log('res:', JSON.stringify(res))

    return renderContent(res);
}