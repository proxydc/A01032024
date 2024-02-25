<template>
  <div class="hello">
    <button class="btn" v-on:click="createDoc(documentId)">
      DOWNLOAD DOCUMENT
    </button>
  </div>
</template>
<script>
import {
  AlignmentType,
  Document,
  Header,
  HeadingLevel,
  Packer,
  Paragraph,
  Tab,
  TabStopPosition,
  TabStopType,
  TextRun,
  ImageRun,
  Footer,
  addParagraph,
  ShadingType,
  HorizontalPositionAlign,
  VerticalPositionAlign,
  TextWrappingType,
  TextWrappingSide,
  Table,
  TableRow,
  TableCell,
  BorderStyle,
} from "docx";
import docData from "../../DocGeneration/tools/DocData"
const FileSaver = require("file-saver");
import urldc from "../../_helpers/urllist.js";
import axios from "axios";
import exppro from "../../DocGeneration/cExpPro";
import expperso from "../../DocGeneration/cExpPerso";
import comp from "../../DocGeneration/cComps";
import certs from "../../DocGeneration/cCerts";
import bref from "../../DocGeneration/cBref";
import lang from "../../DocGeneration/cLang"
export default {
  data() {
    return {
      form: [],
      documentId: "",
      dbDoc: {},
      errormsg: "",
    };
  },
  mounted() {
    try {
      this.documentId = this.$route.params.id;
      this.createDoc();
    } catch (err) {
      this.errormsg = err.message;
    }
  },
  methods: {
    createDoc() {
      try {
        const url = urldc.getDcDocUrl(this.documentId);
        //alert("urldc: " + url);
        axios.get(url).then((res) => {
          console.log("docdata: " + res);
          this.dbDoc = res.data;
        });
      } catch (err) {
        this.errormsg = err;
      }
      console.log("docdata: " + this.dbDoc);
      let docjs = this.dbDoc.document;
      const table = new Table({
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [docData.LineBreak(),
              comp.getSubTitle("Compétences fonctionnelles"),
              comp.getComp(docjs.functionalAbilities),
              docData.getHL(),

              docData.LineBreak(),
              comp.getSubTitle("Compétences techniques"),
              comp.getComp(docjs.technicalAbilities),
              docData.getHL(),],
              borders: {
        right: {
            style: BorderStyle.DASH_DOT_STROKED,
            size: 5,
            color: "889900",
        },
        top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
          bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
          left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
          //right: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
       /* bottom: {
            style: BorderStyle.THICK_THIN_MEDIUM_GAP,
            size: 5,
            color: "889900",
        },*/
    },
                }
                
                ),
                new TableCell({
                    children: [docData.LineBreak(),
              comp.getSubTitle("Compétences fonctionnelles"),
              comp.getComp(docjs.functionalAbilities),
              docData.getHL(),

              docData.LineBreak(),
              comp.getSubTitle("Compétences techniques"),
              comp.getComp(docjs.technicalAbilities),
              docData.getHL(),],
              borders: {
        right: {
            style: BorderStyle.DASH_DOT_STROKED,
            size: 5,
            color: "ff0000",
        },
        top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
          bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
          left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
          //right: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
       /* bottom: {
            style: BorderStyle.THICK_THIN_MEDIUM_GAP,
            size: 5,
            color: "889900",
        },*/
    },
                }),
            ],
        }),
    ],
});
      const doc = new Document({
        sections: [{
        children: [table],
    }]

        /*sections: [
          {
            properties: {
              titlePage: true,
            },
            headers: {
              first: new Header({
                // The header on first page when the 'Different First Page' option is activated
                children: [
                  docData.getHeader(docjs.familyname, docjs.firstname),
                  docData.getBufferLogo1stPage(),
                 // docData.getBufferLogo(),
                ],
              }),
              default: new Header({
                // The standard default header on every page or header on odd pages when the 'Different Odd & Even Pages' option is activated
                children: [
                  docData.getHeader(docjs.familyname, docjs.firstname),
                  docData.getBufferLogo(),
                  //docData.getHL(),
                ],
              }),
            },
            footers: {
              default: new Footer({
                // The standard default footer on every page or footer on odd pages when the 'Different Odd & Even Pages' option is activated
                children: [
                  docData.getFooterC(docjs.familyname, docjs.firstname),
                  docData.LineBreak(),
                  docData.LineBreak(),
                  
                  //docData.getFooterL(),
                  docData.getPageNumber(),
                ],
              }),
              first: new Footer({
                // The footer on first page when the 'Different First Page' option is activated
                children: [
                  docData.getFooterC(docjs.familyname, docjs.firstname),
                  docData.LineBreak(),
                  docData.LineBreak(),
                  //docData.getFooterL(),
                  //docData.getFooterR(),
                  docData.getPageNumber(),
                ],
              }),
            },
            children: [
              docData.getTitle(),

              docData.LineBreak(),
              docData.getLine("Nom:     ", docjs.familyname),
              docData.getLineBreak(),
              docData.getLine("Prénom: ", docjs.firstname),
              docData.getLineBreak(),
              docData.getLine("Email:   ", docjs.email),

              docData.LineBreak(),
              comp.getSubTitle("Compétences fonctionnelles"),
              comp.getComp(docjs.functionalAbilities),
              docData.getHL(),

              docData.LineBreak(),
              comp.getSubTitle("Compétences techniques"),
              comp.getComp(docjs.technicalAbilities),
              docData.getHL(),

              docData.LineBreak(),
              certs.getSubTitle("Diplômes / Certifications"),
              docData.LineBreak(),
              certs.getCerts(docjs.certifications),
              docData.getHL(),

              docData.LineBreak(),
              docData.getSubTitle("Langues"),
              //docData.LineBreak(),
              lang.getLangues(docjs.languages),
              docData.getHL(),

              docData.LineBreak(),
              docData.pageBreak(docjs),
              exppro.getSubTitle("Expériences professionnelles"),
              docData.LineBreak(),
              exppro.getExpPro(docjs.experiencesPro),
              docData.getHL(),

              docData.LineBreak(),
              expperso.getSubTitle("Expériences personnelles"),
              docData.LineBreak(),
              expperso.getExpPerso(docjs.projectsPerso),
              docData.getHL(),

              docData.LineBreak(),
              docData.getSubTitle("Environnement"),
              docData.LineBreak(),
              docData.getLine2(docjs.skills.environments),
              docData.getHL(),

              docData.LineBreak(),
              docData.getSubTitle("Languages"),
              docData.LineBreak(),
              docData.getLine2(docjs.skills.languages),
              docData.getHL(),

              docData.LineBreak(),
              docData.getSubTitle("SGBD"),
              docData.LineBreak(),
              docData.getLine2(docjs.skills.databases),
              docData.getHL(),

              docData.LineBreak(),
              docData.getSubTitle("Outils"),
              docData.LineBreak(),
              docData.getLine2(docjs.skills.tools),
              docData.getHL(),

              docData.LineBreak(),
              docData.getSubTitle("Systèmes"),
              docData.LineBreak(),
              docData.getLine2(docjs.skills.systems),
              docData.getHL(),

              docData.LineBreak(),
              bref.getSubTitle("En bref"),
              docData.LineBreak(),
              docData.getLine2(docjs.bref),
              docData.getHL(),
            ],
          },
          
        ],*/
      });

      // To export into a .docx file
      var filen =
        "DossierCompetences-" +
        docjs.familyname +
        "-" +
        docjs.firstname +
        "-" +
        new Date().toLocaleString() +
        ".docx";
      this.saveDocumentToFile(doc, filen); //`vuedoc.docx`);

    },
   // },
    saveDocumentToFile(doc, fileName) {
      const mimeType =
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      Packer.toBlob(doc).then((blob) => {
        const docblob = blob.slice(0, blob.size, mimeType);
        FileSaver.saveAs(docblob, fileName);
      });
    },
  },
};
</script>