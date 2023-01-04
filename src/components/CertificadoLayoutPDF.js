import { certificado } from "./imagensBase64";

export const CertificadoLayoutPDF = (nomeAluno, nomeCurso, cargaHoraria) => {
    const corpoDocumento = criaCorpoDocumento(nomeAluno, nomeCurso, cargaHoraria);
    const documento = gerarDocumento(corpoDocumento);

    return documento;
}

const criaCorpoDocumento = (nomeAluno, nomeCurso, cargaHoraria) => {
    const content = [
        [{
            text: "CERTIFICAMOS QUE",
            alignment: 'center',
            fontSize: 20
        }],
        [{
            text: nomeAluno.toUpperCase(),
            alignment: 'center',
            bold: true,
            fontSize: 35,
            noWrap: true
        }],
        [{
            text: "CONCLUIU COM SUCESSO O CURSO",
            alignment: 'center',
            fontSize: 15
        }],
        [{
            text: nomeCurso.toUpperCase(),
            alignment: 'center',
            bold: true,
            fontSize: 25
        }],
        [{
            text: `COM CARGA HORÁRIA DE ${cargaHoraria} HORAS.`,
            alignment: 'center',
            fontSize: 15
        }]
    ];

    return content;
}

const gerarDocumento = (corpoDocumento) => {
    const documento = {
        pageSize: 'LETTER',
        pageOrientation: 'landscape',
        pageMargins: [0, 0, 0, 0],
        background: {
            image: certificado,
            alignment: 'center',
            width: 790, // letter page width
            opacity: 1
        },
        content: [
            {
                layout: 'noBorders',
                table: {
                    widths: '*',
                    body: corpoDocumento,
                },
                margin: [0, 230, 0, 0],
                style: "texto"
            },
        ],
        footer: {},
        styles: {
            texto: {
                color: "#313865",
                alignment: 'center',
            }
        }
    };

    return documento;
}
