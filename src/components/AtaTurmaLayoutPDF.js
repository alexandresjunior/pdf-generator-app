import { logo } from "./imagensBase64";

export const AtaTurmaLayoutPDF = (dadosParaImpressao) => {
    const corpoDocumento = criaCorpoDocumento(dadosParaImpressao);
    const documento = gerarDocumento(corpoDocumento);

    return documento;
}

const criaCorpoDocumento = (dadosParaImpressao) => {
    const header = [
        { text: 'Nº', bold: true, fontSize: 11, margin: [10, 20, 0, 10] },
        { text: 'Matrícula', bold: true, fontSize: 11, margin: [10, 20, 0, 10] },
        { text: 'Nome', bold: true, fontSize: 11, margin: [10, 20, 0, 10] },
        { text: 'Assinatura', bold: true, fontSize: 11, margin: [10, 20, 0, 10] },
    ];

    const body = dadosParaImpressao.map((aluno) => {
        return [
            { text: aluno.id, fontSize: 11, margin: [10, 10, 0, 10] },
            { text: aluno.matricula, fontSize: 11, margin: [10, 10, 0, 10] },
            { text: aluno.nome, fontSize: 11, margin: [10, 10, 0, 10] },
            { text: "", fontSize: 11, margin: [10, 10, 0, 10] },
        ];
    });

    let content = [header];

    content = [...content, ...body];

    return content;
}

const gerarDocumento = (corpoDocumento) => {
    const documento = {
        pageSize: 'A4',
        pageMargins: 40,
        header: function () {
            return {
                margin: [40, 20, 0, 35],
                layout: 'noBorders',
                table: {
                    widths: ['*', 'auto'],
                    body: [
                        [{ image: logo, width: 150 }],
                    ],
                },
            };
        },
        content: [
            {
                layout: 'noBorders',
                margin: [0, 35, 0, 0],
                table: {
                    widths: '*',
                    body: [
                        [{ text: 'ATA DE ASSINATURA', bold: true, fontSize: 12 }],
                    ],
                },
            },
            {
                layout: 'noBorders',
                margin: [0, 10, 0, 0],
                table: {
                    widths: ['auto', '*', 'auto', '*'],
                    body: [
                        [
                            { text: 'Curso:', bold: true, fontSize: 12 },
                            { text: 'Java Web com Spring Boot', fontSize: 12 },
                            { text: 'Data:', bold: true, fontSize: 12 },
                            { text: '04/01/2023', fontSize: 12 }
                        ],
                        [
                            { text: 'Professor:', bold: true, fontSize: 12 },
                            { text: 'Hidelberto Melo', fontSize: 12 },
                            { text: 'Turno:', bold: true, fontSize: 12 },
                            { text: 'Noite', fontSize: 12 }
                        ],
                    ],
                },
            },
            {
                layout: 'lightHorizontalLines',
                table: {
                    headerRows: 1,
                    widths: [30, 75, '*', '*'],
                    body: corpoDocumento
                }
            },
        ],
        footer: function () {
            return {
                layout: 'headerLineOnly',
                margin: [0, 0, 0, 50],
                table: {
                    widths: '*',
                    body: [
                        [{ text: `TREINA RECIFE - ${new Date().getFullYear()}`, bold: true, fontSize: 9, alignment: 'center' }],
                    ],
                },
            };
        },
        styles: {}
    };

    return documento;
}