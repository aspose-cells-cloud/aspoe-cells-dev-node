   
export class ConvertRequest  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "format",
            baseName: "Format",
            type: "string",
        },
        {
            name: "files",
            baseName: "Files",
            type: "Array<RequestFile>",
        },
        {
            name: "loadExtensionParameters",
            baseName: "LoadExtensionParameters",
            type: "Array<RequestParameter>",
        },
        {
            name: "saveExtensionParameters",
            baseName: "SaveExtensionParameters",
            type: "Array<RequestParameter>",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConvertRequest.attributeTypeMap;
    }

    public format: string;
    public files: Array<RequestFile>;
    public loadExtensionParameters: Array<RequestParameter>;
    public saveExtensionParameters: Array<RequestParameter>;

    public constructor(init?: Partial< ConvertRequest >) {  
    
        Object.assign(this, init);
    } 
}
   
export class DigitalSignaturFile  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },
        {
            name: "data",
            baseName: "Data",
            type: "string",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DigitalSignaturFile.attributeTypeMap;
    }

    public name: string;
    public password: string;
    public data: string;

    public constructor(init?: Partial< DigitalSignaturFile >) {  
    
        Object.assign(this, init);
    } 
}
   
export class DigitalSignaturRequest  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "digitalSignaturFiles",
            baseName: "DigitalSignaturFiles",
            type: "Array<DigitalSignaturFile>",
        },
        {
            name: "files",
            baseName: "Files",
            type: "Array<RequestFile>",
        },
        {
            name: "loadExtensionParameters",
            baseName: "LoadExtensionParameters",
            type: "Array<RequestParameter>",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DigitalSignaturRequest.attributeTypeMap;
    }

    public digitalSignaturFiles: Array<DigitalSignaturFile>;
    public files: Array<RequestFile>;
    public loadExtensionParameters: Array<RequestParameter>;

    public constructor(init?: Partial< DigitalSignaturRequest >) {  
    
        Object.assign(this, init);
    } 
}
   
export class MergeRequest  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "format",
            baseName: "Format",
            type: "string",
        },
        {
            name: "inOneSheet",
            baseName: "InOneSheet",
            type: "boolean",
        },
        {
            name: "files",
            baseName: "Files",
            type: "Array<RequestFile>",
        },
        {
            name: "loadExtensionParameters",
            baseName: "LoadExtensionParameters",
            type: "Array<RequestParameter>",
        },
        {
            name: "saveExtensionParameters",
            baseName: "SaveExtensionParameters",
            type: "Array<RequestParameter>",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MergeRequest.attributeTypeMap;
    }

    public format: string;
    public inOneSheet: boolean;
    public files: Array<RequestFile>;
    public loadExtensionParameters: Array<RequestParameter>;
    public saveExtensionParameters: Array<RequestParameter>;

    public constructor(init?: Partial< MergeRequest >) {  
    
        Object.assign(this, init);
    } 
}
   
export class ProtectionRequest  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },
        {
            name: "files",
            baseName: "Files",
            type: "Array<RequestFile>",
        },
        {
            name: "loadExtensionParameters",
            baseName: "LoadExtensionParameters",
            type: "Array<RequestParameter>",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ProtectionRequest.attributeTypeMap;
    }

    public password: string;
    public files: Array<RequestFile>;
    public loadExtensionParameters: Array<RequestParameter>;

    public constructor(init?: Partial< ProtectionRequest >) {  
    
        Object.assign(this, init);
    } 
}
   
export class ReplaceRequest  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "newValue",
            baseName: "NewValue",
            type: "string",
        },
        {
            name: "oldValue",
            baseName: "OldValue",
            type: "string",
        },
        {
            name: "files",
            baseName: "Files",
            type: "Array<RequestFile>",
        },
        {
            name: "loadExtensionParameters",
            baseName: "LoadExtensionParameters",
            type: "Array<RequestParameter>",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ReplaceRequest.attributeTypeMap;
    }

    public newValue: string;
    public oldValue: string;
    public files: Array<RequestFile>;
    public loadExtensionParameters: Array<RequestParameter>;

    public constructor(init?: Partial< ReplaceRequest >) {  
    
        Object.assign(this, init);
    } 
}
   
export class RequestFile  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },
        {
            name: "data",
            baseName: "Data",
            type: "string",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RequestFile.attributeTypeMap;
    }

    public name: string;
    public data: string;

    public constructor(init?: Partial< RequestFile >) {  
    
        Object.assign(this, init);
    } 
}
   
export class RequestParameter  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },
        {
            name: "value",
            baseName: "Value",
            type: "string",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RequestParameter.attributeTypeMap;
    }

    public name: string;
    public value: string;

    public constructor(init?: Partial< RequestParameter >) {  
    
        Object.assign(this, init);
    } 
}
   
export class ResponseFile  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "filename",
            baseName: "Filename",
            type: "string",
        },
        {
            name: "fileSize",
            baseName: "FileSize",
            type: "number",
        },
        {
            name: "fileContent",
            baseName: "FileContent",
            type: "string",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ResponseFile.attributeTypeMap;
    }

    public filename: string;
    public fileSize: number;
    public fileContent: string;

    public constructor(init?: Partial< ResponseFile >) {  
    
        Object.assign(this, init);
    } 
}
   
export class ResponseFiles  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "files",
            baseName: "Files",
            type: "Array<ResponseFile>",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ResponseFiles.attributeTypeMap;
    }

    public files: Array<ResponseFile>;

    public constructor(init?: Partial< ResponseFiles >) {  
    
        Object.assign(this, init);
    } 
}
   
export class SearchRequest  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },
        {
            name: "files",
            baseName: "Files",
            type: "Array<RequestFile>",
        },
        {
            name: "loadExtensionParameters",
            baseName: "LoadExtensionParameters",
            type: "Array<RequestParameter>",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SearchRequest.attributeTypeMap;
    }

    public text: string;
    public files: Array<RequestFile>;
    public loadExtensionParameters: Array<RequestParameter>;

    public constructor(init?: Partial< SearchRequest >) {  
    
        Object.assign(this, init);
    } 
}
   
export class SplitRequest  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "format",
            baseName: "Format",
            type: "string",
        },
        {
            name: "files",
            baseName: "Files",
            type: "Array<RequestFile>",
        },
        {
            name: "loadExtensionParameters",
            baseName: "LoadExtensionParameters",
            type: "Array<RequestParameter>",
        },
        {
            name: "saveExtensionParameters",
            baseName: "SaveExtensionParameters",
            type: "Array<RequestParameter>",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SplitRequest.attributeTypeMap;
    }

    public format: string;
    public files: Array<RequestFile>;
    public loadExtensionParameters: Array<RequestParameter>;
    public saveExtensionParameters: Array<RequestParameter>;

    public constructor(init?: Partial< SplitRequest >) {  
    
        Object.assign(this, init);
    } 
}
   
export class TextItem  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TextItem.attributeTypeMap;
    }

    public text: string;

    public constructor(init?: Partial< TextItem >) {  
    
        Object.assign(this, init);
    } 
}
   
export class TextItems  {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "textItemList",
            baseName: "TextItemList",
            type: "Array<TextItem>",
        }
    ];
    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TextItems.attributeTypeMap;
    }

    public textItemList: Array<TextItem>;

    public constructor(init?: Partial< TextItems >) {  
    
        Object.assign(this, init);
    } 
}
const enumsMap = {
};
const typeMap = {
    ConvertRequest,
    DigitalSignaturFile,
    DigitalSignaturRequest,
    MergeRequest,
    ProtectionRequest,
    ReplaceRequest,
    RequestFile,
    RequestParameter,
    ResponseFile,
    ResponseFiles,
    SearchRequest,
    SplitRequest,
    TextItem,
    TextItems,
};

export {enumsMap, typeMap};