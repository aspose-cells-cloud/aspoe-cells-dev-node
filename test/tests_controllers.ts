import { expect } from "chai";
import "mocha";

import * as model from "../src/model/model";
import * as api from "../src/api";
import * as baseCommon from "./base_common";

const localPath = "TestData/";

var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('Controllers test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsDevApi("http://127.0.0.1:16000","v1.0");

    describe('postConvertWorkbook_pdf test', function(){
      it("should call PostConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "pdf";

        var request = new model.ConvertRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postConvertWorkbook_docx test', function(){
      it("should call PostConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "docx";

        var request = new model.ConvertRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postConvertWorkbook_pptx test', function(){
      it("should call PostConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "pptx";

        var request = new model.ConvertRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postConvertWorkbook_json test', function(){
      it("should call PostConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "json";

        var request = new model.ConvertRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postConvertWorkbook_markdown test', function(){
      it("should call PostConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "markdown";

        var request = new model.ConvertRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postConvertWorkbook_png test', function(){
      it("should call PostConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "png";

        var request = new model.ConvertRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postConvertWorkbook_ods test', function(){
      it("should call PostConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "ods";

        var request = new model.ConvertRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postConvertWorkbook_numbers test', function(){
      it("should call PostConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "numbers";

        var request = new model.ConvertRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postConvertWorkbook_html test', function(){
      it("should call PostConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "html";

        var request = new model.ConvertRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postMerge_pdf test', function(){
      it("should call PostMerge successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "pdf";

        var request = new model.MergeRequest();
        request.format = format; 
        request.inOneSheet = true; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postMerge_docx test', function(){
      it("should call PostMerge successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "docx";

        var request = new model.MergeRequest();
        request.format = format; 
        request.inOneSheet = true; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postMerge_pptx test', function(){
      it("should call PostMerge successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "pptx";

        var request = new model.MergeRequest();
        request.format = format; 
        request.inOneSheet = true; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postMerge_json test', function(){
      it("should call PostMerge successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "json";

        var request = new model.MergeRequest();
        request.format = format; 
        request.inOneSheet = true; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postMerge_markdown test', function(){
      it("should call PostMerge successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "markdown";

        var request = new model.MergeRequest();
        request.format = format; 
        request.inOneSheet = true; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postMerge_png test', function(){
      it("should call PostMerge successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "png";

        var request = new model.MergeRequest();
        request.format = format; 
        request.inOneSheet = true; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postMerge_ods test', function(){
      it("should call PostMerge successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "ods";

        var request = new model.MergeRequest();
        request.format = format; 
        request.inOneSheet = true; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postMerge_numbers test', function(){
      it("should call PostMerge successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "numbers";

        var request = new model.MergeRequest();
        request.format = format; 
        request.inOneSheet = true; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postMerge_html test', function(){
      it("should call PostMerge successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "html";

        var request = new model.MergeRequest();
        request.format = format; 
        request.inOneSheet = true; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postSplit_pdf test', function(){
      it("should call PostSplit successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "pdf";

        var request = new model.SplitRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postSplit_docx test', function(){
      it("should call PostSplit successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "docx";

        var request = new model.SplitRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postSplit_pptx test', function(){
      it("should call PostSplit successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "pptx";

        var request = new model.SplitRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postSplit_json test', function(){
      it("should call PostSplit successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "json";

        var request = new model.SplitRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postSplit_markdown test', function(){
      it("should call PostSplit successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "markdown";

        var request = new model.SplitRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postSplit_png test', function(){
      it("should call PostSplit successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "png";

        var request = new model.SplitRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postSplit_ods test', function(){
      it("should call PostSplit successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "ods";

        var request = new model.SplitRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postSplit_numbers test', function(){
      it("should call PostSplit successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "numbers";

        var request = new model.SplitRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postSplit_html test', function(){
      it("should call PostSplit successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var format = "html";

        var request = new model.SplitRequest();
        request.format = format; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postSearch_123 test', function(){
      it("should call PostSearch successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var text = "123";

        var request = new model.SearchRequest();
        request.text = text; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postSearch(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postSearch_test test', function(){
      it("should call PostSearch successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var text = "test";

        var request = new model.SearchRequest();
        request.text = text; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postSearch(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postReplace_123_456 test', function(){
      it("should call PostReplace successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var newValue = "123";
        var oldValue = "456";

        var request = new model.ReplaceRequest();
        request.newValue = newValue; 
        request.oldValue = oldValue; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postReplace(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postReplace_testnew_testold test', function(){
      it("should call PostReplace successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var newValue = "testnew";
        var oldValue = "testold";

        var request = new model.ReplaceRequest();
        request.newValue = newValue; 
        request.oldValue = oldValue; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postReplace(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postEncryptWithPassword test', function(){
      it("should call PostEncryptWithPassword successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var request = new model.ProtectionRequest();
        request.password = "123456"; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postEncryptWithPassword(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postDecryptWithPassword test', function(){
      it("should call PostDecryptWithPassword successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
      
        var request = new model.ProtectionRequest();
        request.password = "123456"; 
         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postDecryptWithPassword(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('postDigitalSignature test', function(){
      it("should call PostDigitalSignature successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localBook1 = "Book1.xlsx";
        var localMyDoc = "myDocument.xlsx";
        var localPfx = "roywang.pfx";
      
        var request = new model.DigitalSignaturRequest();
         
        request.digitalSignaturFiles =[];  
        request.digitalSignaturFiles.push(baseCommon.getDigitalSignaturFile(localPath,localPfx, "12345"));


         
        request.files =[];  
        request.files.push(baseCommon.getRequestFile(localPath,localBook1));

        request.files.push(baseCommon.getRequestFile(localPath,localMyDoc));

         

        return cellsApi.postDigitalSignature(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});