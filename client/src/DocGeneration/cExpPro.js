import {
    ImageRun,
    AlignmentType,
    HeadingLevel,
    Paragraph,
    Tab,
    TextRun,
    ExternalHyperlink,
    TableCell,
    Table,
    TableRow,
    WidthType,
    BorderStyle,
    HorizontalPositionAlign,
    HorizontalAlign,
} from "docx";
import enumImg from "../_helpers/enum-Img.js";
import docData from "./tools/DocData.js";
class cExpPro {
    static getSubTitle(txt) {
        return new Paragraph({
            children: [
                new ImageRun({
                    type: "png",
                    data: docData.urlToBlob(enumImg.TitleExp),
                    transformation: {
                        width: 50,
                        height: 50,
                    },
                }),
                new TextRun({
                    text: "                        " + txt,
                    alignment: AlignmentType.CENTER,
                    heading: HeadingLevel.TITLE,
                    bold: true,
                    //underline: true,
                    size: 30,
                    color: "#008cba",
                }),
            ],
        });
    }
    static getExpEnt(ent) {
        return new Paragraph({
            children: [
                new TextRun({
                    text: ent,
                    alignment: AlignmentType.LEFT,
                    heading: HeadingLevel.TITLE,
                    bold: true,
                    //underline: true,
                    size: 28,
                    //color: "#008cba",
                }),
            ],
        });
    }
    static getExpPost(poste) {
        return new Paragraph({
            children: [
                new TextRun({
                    text: poste,
                    alignment: AlignmentType.LEFT,
                    heading: HeadingLevel.TITLE,
                    bold: true,
                    //underline: true,
                    size: 24,
                    color: "#66bfbf",
                }),
            ],
        });
    }
    static getExpPeriode(stdate, enddate) {
        let periode = '';
        if (stdate != "") {
            if (enddate != '') {
                periode = stdate + ' à ' + enddate
            } else {
                periode = "Depuis " + stdate
            }
            return new Paragraph({
                children: [
                    new TextRun({
                        text: periode,
                        alignment: AlignmentType.LEFT,
                        heading: HeadingLevel.TITLE,
                        //bold: true,
                        //underline: true,
                        size: 24,
                        color: "#66bfbf",
                    }),
                ],
            });
        }
        return "";
    }
    static getExpEnvTechTitle(title) {
        return new Paragraph({
            children: [
                new TextRun({
                    text: title,
                    alignment: AlignmentType.LEFT,
                    heading: HeadingLevel.TITLE,
                    //bold: true,
                    //underline: true,
                    size: 24,
                    color: "#66bfbf",
                }),
            ],
        });
    }
    static getExpEnvTech(ent) {
        return new Paragraph({
            children: [
                new TextRun({
                    text: ent,
                    alignment: AlignmentType.LEFT,
                    heading: HeadingLevel.TITLE,
                    bold: true,
                    //underline: true,
                    size: 22,
                    //color: "#008cba",
                }),
            ],
        });
    }
    static getExpTask(i, tasks) {
            if (tasks != '' && tasks.length > i) {
                return new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                docData.getBulletImg(enumImg.ExpProTask),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        })
                                    ],
                                    borders: {
                                        top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                        bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                        left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                        right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                    },
                                    //verticalAlign: "center",
                                    //margins: "10px",
                                    width: { size: 5, type: WidthType.PERCENTAGE },
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: tasks[i], //7 spaces,
                                                alignment: AlignmentType.LEFT,
                                                size: 22,
                                            }),
                                        ]
                                    })],
                                    borders: {
                                        top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                        bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                        left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                        right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                    },
                                    width: { size: 95, type: WidthType.PERCENTAGE },
                                }),

                            ]
                        })
                    ]
                })
            }
            return ''; //new TableCell({ children: [] })'';
        }
        /*static getExpTask(i, tasks) {
            if (tasks != '' && tasks.length > i) {
                return new Paragraph({
                    children: [
                        docData.getBulletImg(enumImg.ExpProTask),
                        new TextRun({
                            text: "       " + tasks[i], //7 spaces,
                            alignment: AlignmentType.LEFT,
                            size: 22,
                        }),
                    ],
                });
            }
            return '';
        }*/
    static getExpPro(pros) {
        //alert("len: " + pros.length);
        if (pros.length > 0) {
            const cf = new Paragraph({
                children: [],
            });
            for (var i = 0; i < pros.length; i++) {
                cf.addChildElement(docData.getSubTitle1("Expérience " + (i + 1)));
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(docData.LineBreakTR());
                /*
  cf.addChildElement(
          new TextRun({
            text: pros[i].title,
            bold: true,
            alignment: AlignmentType.LEFT,
            size: 26,
            allCaps: true,
            break: 1
          })
        );
        cf.addChildElement(docData.LineBreakTR());
        cf.addChildElement(
          new TextRun({
            text: "  De: " + pros[i].start + "    A: " + pros[i].end,
            alignment: AlignmentType.RIGHT,
            size: 22,
            smallCaps: true,
            bold: true,
          })
        );
*/

                cf.addChildElement(docData.getSubTitle2("Période"));
                cf.addChildElement(
                    new TextRun({
                        text: "De: " + pros[i].start + "    A: " + pros[i].end,
                        break: 1,
                        //bullet: {level: 0},
                    })
                );
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(docData.getSubTitle2("Poste"));
                /*cf.addChildElement(
                  new TextRun({
                    text: "Poste: ",
                    bold: true,
                  })
                );*/
                cf.addChildElement(
                    new TextRun({
                        text: pros[i].title,
                        break: 1,
                    })
                );
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(docData.getSubTitle2("Entreprise"));
                /*cf.addChildElement(
                  new TextRun({
                    text: "Entreprise: ",
                    bold: true,
                  })
                );*/
                cf.addChildElement(
                    new TextRun({
                        text: pros[i].company,
                        break: 1,
                    })
                );
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(docData.getSubTitle2("Contexte"));
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(
                    new TextRun({
                        text: pros[i].context,
                        break: 1,
                    })
                );
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(docData.getSubTitle2("Environnement technique"));
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(
                    new TextRun({
                        text: pros[i].technical_env,
                    })
                );
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(docData.LineBreakTR());
                cf.addChildElement(docData.getSubTitle2("Compétences/ Tâches"));
                cf.addChildElement(docData.LineBreakTR());
                for (var j = 0; j < pros[i].tasks.length; j++) {
                    cf.addChildElement(docData.getBulletImg(enumImg.ExpProTask)); //bullet
                    cf.addChildElement(
                        new TextRun({
                            text: "       " + pros[i].tasks[j], //7 spaces,
                            alignment: AlignmentType.LEFT,
                            size: 22,
                        })
                    );
                    cf.addChildElement(docData.LineBreakTR());
                }
                cf.addChildElement(docData.LineBreakTR());
            }
            return cf;
        }
        return "";
    }
}

export default cExpPro;