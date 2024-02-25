import {
    Header,
    ImageRun,
    AlignmentType,
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
    Tab,
    TabStopPosition,
    TabStopType,
    TextRun,
    HorizontalPositionAlign,
    VerticalPositionAlign,
    ExternalHyperlink,
    PageNumber,
    FrameAnchorType,
    ShadingType,
    Hyperlink,
    TableRow,
    TableCell,
    BorderStyle,
} from "docx";
import docData from "./DocData";
import exppro from "../../DocGeneration/cExpPro";
import enumImg from "../../_helpers/enum-Img.js";

class tableRow{

static getBlankTableRow()
{
    return new TableRow
                    (
                        {
                            children: 
                            [
                                new TableCell
                                (
                                    {
                                        children: [ docData.LineBreak(), ],
                                        borders:{
                                                    top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    right: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"}, 
                                                },
                                    }                
                                ),
                                new TableCell
                                (
                                    {
                                        children: [ docData.LineBreak(), ],
                                        borders:{
                                                    top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    right: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"}, 
                                                },
                                    }                
                                ),
                            ],
                        }
                    );
}
static getBlankTableRowSingleLineBreak()
{
    return new TableRow
                    (
                        {
                            children: 
                            [
                                new TableCell
                                (
                                    {
                                        children: [ docData.LineBreak(), ],
                                        columnSpan: 2,
                                        borders:{
                                                    top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    right: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"}, 
                                                },
                                    }                
                                )
                            ],
                        }
                    );
}

static getBlankTableRowPageBreak()
{
    return new TableRow
                    (
                        {
                            children: 
                            [
                                new TableCell
                                (
                                    {
                                        children: [ docData.pageBreak(), ],
                                        columnSpan: 2,
                                        borders:{
                                                    top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    right: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"}, 
                                                },
                                    }                
                                )
                            ],
                        }
                    );
}
static getExpTitle(txt)
{
    return new TableRow
                    (
                        {
                            children: 
                            [
                                new TableCell
                                (
                                    {
                                        children: [ exppro.getSubTitle(txt), ],
                                        columnSpan: 2,
                                        borders:{
                                                    top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    right: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"}, 
                                                },
                                    }                
                                )
                            ],
                        }
                    );
}

static getTwoExpTableRow(i, pros)
{
    if(pros!=null && pros.length>=i)
    {
        alert('length: '+pros.length);
    return new TableRow
                    (
                        {
                            children: 
                            [
                                new TableCell
                                (
                                    {
                                        children: [ docData.getSubTitle("Période"),
                                        /*new TextRun({
                                            text: "De: " + pros[i].start + "    A: " + pros[i].end,
                                            break: 1,
                                          })*/
                                         ],
                                        borders:{
                                                    top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    right: {
                                                        style: BorderStyle.DASH_DOT_STROKED,
                                                        size: 5,
                                                        color: "889900",
                                                    },
                                                },
                                    }                
                                ),
                                new TableCell
                                (
                                    {
                                        children: [   //for (var j = 0; j < pros[i].tasks.length; j++) {
                                            /*docData.getBulletImg(enumImg.ExpProTask),//bullet
                                             new Paragraph({
                                                text: "       " + pros[i].tasks[0], //7 spaces,
                                                alignment: AlignmentType.LEFT,
                                                size: 22,
                                              }),*/
                                          
                                            docData.LineBreak()
                                          //}         
                                        ],
                                        borders:{
                                                    top: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    bottom: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    left: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"},
                                                    right: {style: BorderStyle.NONE, size: 0, color: "FFFFFF"}, 
                                                },
                                    }                
                                ),
                            ],
                        }
                    );
    }
    return '';//new TableRow();
}

}
export default tableRow;