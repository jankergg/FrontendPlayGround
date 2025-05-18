import GetElementsByTagName from './GetElementsByTagName';

function checkResults(expected, received) {
    expect(received.length).toBe(expected.length);
    // Inefficient O(n^2) check so that order doesn't matter.
    for (let i = 0; i < expected.length; i++) {
        expect(received.some((node) => node.isEqualNode(expected[i]))).toBe(true);
    }
}

describe('GetElementsByTagName()', () => {
    test('empty tree', () => {
        const doc = new DOMParser().parseFromString(``, 'text/html');
        const els = GetElementsByTagName(doc, 'div');
        const expected = doc.querySelectorAll('div');

        checkResults(expected, els);
    });

    test('single element with no nodes', () => {
        const doc = new DOMParser().parseFromString(`<div></div>`, 'text/html');

        const els = GetElementsByTagName(doc, 'div');
        const expected = doc.querySelectorAll('div');

        checkResults(expected, els);
    });

    describe('varying tag token length', () => {
        describe('one tag', () => {
            test('no match', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span></span>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'p');
                const expected = doc.querySelectorAll('p');
                checkResults(expected, els);
            });

            test('one match', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span></span>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'span');
                const expected = doc.querySelectorAll('span');
                checkResults(expected, els);
            });

            test('two matches', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span></span>
            <p></p>
            <span></span>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'span');
                const expected = doc.querySelectorAll('span');
                checkResults(expected, els);
            });

            test('inner matches', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span>
              <span></span>
            </span>
            <p></p>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'span');
                const expected = doc.querySelectorAll('span');
                checkResults(expected, els);
            });

            test('inner matches deep', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span>
              <span></span>
            </span>
            <p>
              <span>
                <span></span>
              </span>
            </p>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'span');
                const expected = doc.querySelectorAll('span');
                checkResults(expected, els);
            });
        });

        describe('two tags', () => {
            test('no match', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span></span>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'span div');
                const expected = doc.querySelectorAll('span div');
                checkResults(expected, els);
            });

            test('one match', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span></span>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'div span');
                const expected = doc.querySelectorAll('div span');
                checkResults(expected, els);
            });

            test('two matches', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span></span>
            <p></p>
            <span></span>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'div span');
                const expected = doc.querySelectorAll('div span');
                checkResults(expected, els);
            });

            test('inner matches', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span>
              <span></span>
            </span>
            <p></p>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'div span');
                const expected = doc.querySelectorAll('div span');
                checkResults(expected, els);
            });

            test('inner matches deep', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span>
              <span></span>
            </span>
            <p>
              <span>
                <span></span>
              </span>
            </p>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'p span');
                const expected = doc.querySelectorAll('p span');
                checkResults(expected, els);
            });

            test('inner matches deep same tag', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span>
              <span></span>
            </span>
            <p>
              <span>
                <span></span>
              </span>
            </p>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'span span');
                const expected = doc.querySelectorAll('span span');
                checkResults(expected, els);
            });
        });

        describe('three tags', () => {
            test('no match', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <p>
              <span></span>
            </p>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'div span p');
                const expected = doc.querySelectorAll('div span p');
                checkResults(expected, els);
            });

            test('one match', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <p>
              <span></span>
            </p>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'div p span');
                const expected = doc.querySelectorAll('div p span');
                checkResults(expected, els);
            });

            test('two matches', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <p>
              <span></span>
            </p>
            <p>
              <span></span>
            </p>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'div p span');
                const expected = doc.querySelectorAll('div p span');
                checkResults(expected, els);
            });

            test('inner matches', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span>
              <span></span>
            </span>
            <p></p>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'div span span');
                const expected = doc.querySelectorAll('div span span');
                checkResults(expected, els);
            });

            test('inner matches deep', () => {
                const doc = new DOMParser().parseFromString(
                    `<div>
            <span>
              <span></span>
            </span>
            <p>
              <span>
                <span></span>
              </span>
            </p>
          </div>`,
                    'text/html',
                );

                const els = GetElementsByTagName(doc, 'div p span');
                const expected = doc.querySelectorAll('div p span');
                checkResults(expected, els);
            });
        });
    });

    test('huge DOM tree', () => {
        const doc = new DOMParser().parseFromString(
            `<div>
        <span>Span</span>
        <p>Paragraph</p>
        <div>
          <div>
            <p>
              <div>
                <div>
                  <span></span>
                  <div>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <p>
                <div>
                  <span></span>
                  <div>
                    <div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>`,
            'text/html',
        );

        checkResults(
            doc.querySelectorAll('div div'),
            GetElementsByTagName(doc, 'div div'),
        );
        checkResults(
            doc.querySelectorAll('span'),
            GetElementsByTagName(doc, 'span'),
        );
        checkResults(
            doc.querySelectorAll('div p'),
            GetElementsByTagName(doc, 'div p'),
        );
        checkResults(
            doc.querySelectorAll('div p span'),
            GetElementsByTagName(doc, 'div p span'),
        );
        checkResults(
            doc.querySelectorAll('div div span'),
            GetElementsByTagName(doc, 'div div span'),
        );
        checkResults(
            doc.querySelectorAll('p span'),
            GetElementsByTagName(doc, 'p span'),
        );
        checkResults(
            doc.querySelectorAll('div p div span'),
            GetElementsByTagName(doc, 'div p div span'),
        );
    });

    test('ignores comment nodes', () => {
        const doc = new DOMParser().parseFromString(
            `<div>
        <!-- Here's a comment -->
        <div>Hello</div>
      </div>`,
            'text/html',
        );

        const els = GetElementsByTagName(doc, 'div');
        const expected = doc.querySelectorAll('div');

        checkResults(expected, els);
    });

    test('mixed case tag names', () => {
        const doc = new DOMParser().parseFromString(
            `<div>
          <span>Span</span>
          <p>Paragraph</p>
          <div>
            <div>
              <span>Hello</span>
            </div>
          </div>
        </div>
        <div>Hello</div>`,
            'text/html',
        );

        const divs = GetElementsByTagName(doc, 'DIV div');
        const expectedDivs = doc.querySelectorAll('DIV div'.toLocaleLowerCase());
        checkResults(expectedDivs, divs);

        const spans = GetElementsByTagName(doc, 'div P sPaN');
        const expectedSpans = doc.querySelectorAll(
            'div P sPaN'.toLocaleLowerCase(),
        );
        checkResults(expectedSpans, spans);
    });
});