"use strict";
/***
 * @name document.addEventListener
 * @description Agrega el focus a la lista de componentes y lo elimina si fue realizado por un click
 */
document.addEventListener("DOMContentLoaded", () => {
    const componentsClass = ".btn, .checkbox-button, .switch-input, .radio-button";
    document.querySelectorAll(componentsClass).forEach((element) => {
        element.addEventListener("focus", () => element.classList.add("tab-focus"));
        element.addEventListener("blur", () => element.classList.remove("tab-focus"));
        element.addEventListener("click", () => element.classList.remove("tab-focus"));
    });
});
class BLUEUtils {
    static makeRandomId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    ;
    static dataFilter(search, data, key) {
        let tempData = data;
        let tempKey = key;
        let tempSearch = search.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let dataReturn = [];
        tempData.forEach(function (temp) {
            Object.getOwnPropertyNames(temp).forEach(function (i) {
                if (temp.hasOwnProperty(tempKey) && tempKey == i) {
                    if (temp[tempKey].toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(tempSearch)) {
                        dataReturn.push(temp);
                    }
                }
            });
        });
        return dataReturn;
    }
    static dataFilterForArray(search, data, key) {
        let dataReturn = [];
        data.forEach(function (temp) {
            Object.getOwnPropertyNames(temp).forEach(function (i) {
                if (temp.hasOwnProperty(key) && key == i) {
                    search.forEach(function (arrSearch) {
                        if (temp[key].toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(arrSearch.toString().toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                            dataReturn.push(temp);
                        }
                    });
                }
            });
        });
        return dataReturn;
    }
    /**
     * Convierte un string en un objeto HTMLElement.
     * @returns {HTMLElement} HTMLElement
     * @param str
     */
    static stringToHTML(str) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(str, 'text/html');
        return doc.body.childNodes[0];
    }
    static slideToggle(slideContainer, iconRotate) {
        var _a, _b;
        let element = document.getElementById(slideContainer);
        (_a = document.getElementById(iconRotate)) === null || _a === void 0 ? void 0 : _a.classList.add("transition-icons");
        (_b = document.getElementById(iconRotate)) === null || _b === void 0 ? void 0 : _b.classList.toggle("rotate-icons");
        if (element === null || element === void 0 ? void 0 : element.classList.contains("d-none")) {
            if (element.classList.contains("d-none"))
                element === null || element === void 0 ? void 0 : element.classList.remove("d-none");
            let height = element === null || element === void 0 ? void 0 : element.offsetHeight;
            element === null || element === void 0 ? void 0 : element.style.setProperty("overflow", "hidden");
            element === null || element === void 0 ? void 0 : element.style.setProperty("height", "0");
            element === null || element === void 0 ? void 0 : element.getClientRects();
            element === null || element === void 0 ? void 0 : element.style.setProperty("transition-property", "height");
            element === null || element === void 0 ? void 0 : element.style.setProperty("transition-duration", "400ms");
            element === null || element === void 0 ? void 0 : element.style.setProperty("height", height + "px");
            setTimeout(() => {
                element === null || element === void 0 ? void 0 : element.style.removeProperty('height');
                element === null || element === void 0 ? void 0 : element.style.removeProperty('overflow');
                element === null || element === void 0 ? void 0 : element.style.removeProperty('transition-duration');
                element === null || element === void 0 ? void 0 : element.style.removeProperty('transition-property');
            }, 400);
        }
        else {
            element === null || element === void 0 ? void 0 : element.style.setProperty("transition-property", "height");
            element === null || element === void 0 ? void 0 : element.style.setProperty("transition-duration", "400ms");
            element === null || element === void 0 ? void 0 : element.style.setProperty("height", element.offsetHeight + "px");
            element === null || element === void 0 ? void 0 : element.getClientRects();
            element === null || element === void 0 ? void 0 : element.style.setProperty("overflow", "hidden");
            element === null || element === void 0 ? void 0 : element.style.setProperty("height", "0");
            setTimeout(() => {
                element === null || element === void 0 ? void 0 : element.classList.add("d-none");
                element === null || element === void 0 ? void 0 : element.style.removeProperty('height');
                element === null || element === void 0 ? void 0 : element.style.removeProperty('overflow');
                element === null || element === void 0 ? void 0 : element.style.removeProperty('transition-duration');
                element === null || element === void 0 ? void 0 : element.style.removeProperty('transition-property');
            }, 400);
        }
    }
}
/**
 * Toma un nodo y devuelve una matriz de nombres de clase.
 * @param {HTMLElement} node - HTMLElement: el nodo del que queremos obtener la lista de clases
 * @returns Una matriz de cadenas.
 */
const classListToArray = (node) => {
    /* Tomando la propiedad className del nodo y dividiéndola en una matriz de cadenas. */
    const classes = node.className
        .split(" ")
        .filter((className) => !!className.trim());
    return classes;
};
/**
 * Devuelve verdadero si className se encuentra en la propiedad className del nodo.
 * @param {HTMLElement} node - El nodo para verificar el nombre de la clase.
 * @param {string} className - El nombre de la clase para comprobar.
 * @returns Un valor booleano.
 */
const hasClass = (node, className) => {
    /* Comprobando si el nodo tiene el className. */
    return new RegExp(className, "g").test(node.className);
};
/**
 * Devuelve verdadero si el nodo tiene alguna de las clases en la matriz de coincidencias.
 * @param {HTMLElement} node - HTMLElement - el nodo para comprobar
 * @param {string[]} matches - cuerda[]
 * @returns Una función que toma dos argumentos, nodo y coincidencias.
 */
const hasSomeClasses = (node, matches) => {
    /* Comprobando si el nodo tiene alguna de las clases en la matriz de coincidencias. */
    return matches.some((className) => hasClass(node, className));
};
/**
 * Devuelve verdadero si el nodo tiene todas las clases en la matriz de coincidencias.
 * @param {HTMLElement} node - HTMLElement: el nodo para verificar las clases
 * @param {string[]} matches - cuerda[]
 * @returns Una función que toma dos argumentos, un nodo y una matriz de cadenas. La función devuelve un booleano.
 */
const hasEveryClasses = (node, matches) => {
    /* Está comprobando si el nodo tiene todas las clases en la matriz de coincidencias. */
    return matches.every((className) => hasClass(node, className));
};
/**
 * Evalua que el usuario solo digite datos númericos en un campo
 * @param {any} evt - Evento del teclado
 * @returns  La función devuelve un booleano.
 */
const isNumberKeyCode = (evt) => {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 46)) {
        return false;
    }
    return true;
};

"use strict";
const config_labels = [
    {
        module_class: 'default',
        en: {},
        es: {}
    },
    {
        module_class: 'BlueTable',
        en: {
            see_more: "See more",
            see_less: "See less",
            has_not_records: "Has not record to show"
        },
        es: {
            see_more: "Ver más",
            see_less: "Ver menos",
            has_not_records: "La consulta no arrojó resultados que mostrar"
        }
    },
    {
        module_class: 'ExchangeRateComponent',
        en: {
            buy: "Buy",
            sell: "Sell",
            select_currency_label: "Select a currency",
            EUR: "Euro",
            USD: "Dollar"
        },
        es: {
            buy: "Compra",
            sell: "Venta",
            select_currency_label: "Seleccione una moneda",
            EUR: "Euro",
            USD: "D&oacute;lar"
        }
    },
    {
        module_class: 'OTP',
        en: {
            titleSendOTP: "Verification code",
            descriptionSendOTPSMS: "For your security, we will send you a confirmation code by SMS text message to ",
            descriptionSendOTPEmail: "For your security, we will send you a confirmation code to your email ",
            footerSendOTPSMS: "If you do not recognize the number, contact us via <a id='goWhatsAppLink' class='typography-link'>WhatsApp.</a>",
            footerSendOTPEmail: "If you do not recognize the email, contact us via <a id='goWhatsAppLink' class='typography-link'>WhatsApp.</a>",
            buttonSendOTPText: "Send code",
            titleValidateOTP: "Enter verification code",
            descriptionValidateOTPSMS: "¡Check your messages! <br> We have sent an SMS with a 6-digit numeric code to your phone number.",
            descriptionValidateOTPEmail: "¡Check your mail! <br> We have sent a 6-digit numeric code to your email.",
            footerValidateOTP: "Did you not receive the code?",
            footerResendLinkSMS: "Resend SMS",
            footerResendLinkEmail: "Resend email",
            incorrectOTP: "Incorrect code, try again.",
            buttonContinueText: "Continue"
        },
        es: {
            titleSendOTP: "Código de verificación",
            descriptionSendOTPSMS: "Por su seguridad, le enviaremos un código de confirmación por mensaje de texto SMS al ",
            descriptionSendOTPEmail: "Por su seguridad, le enviaremos un código de confirmación a su correo electrónico ",
            footerSendOTPSMS: "Si no reconoce el número, contáctenos vía  <a id='goWhatsAppLink' class='typography-link'>WhatsApp.</a>",
            footerSendOTPEmail: "Si no reconoce el correo electrónico, contáctenos vía  <a id='goWhatsAppLink' class='typography-link'>WhatsApp.</a>",
            buttonSendOTPText: "Enviar código",
            titleValidateOTP: "Ingrese el código de verificación",
            descriptionValidateOTPSMS: "¡Revise sus mensajes! <br> Hemos enviado un SMS con un código de 6 digitos númericos a su teléfono.",
            descriptionValidateOTPEmail: "¡Revise su correo! <br> Hemos enviado un código de 6 digitos númericos a su correo electrónico.",
            footerValidateOTP: "¿No recibió el código?",
            footerResendLinkSMS: "Reenviar SMS",
            footerResendLinkEmail: "Reenviar correo electrónico",
            incorrectOTP: "Código incorrecto, intente de nuevo.",
            buttonContinueText: "Continuar"
        }
    },
    {
        module_class: 'CBAC_SMS',
        en: {
            titleCBAC: "Enter your Código BAC",
            descriptionCBAC: "Check your phone! <br> We send your Código BAC by SMS to the cell phone ",
            footerCBAC: "Did you not receive the code?",
            footerResendLink: "Resend code",
            linkNoAccess: "I do not have access to Código BAC",
            incorrectCBAC: "Incorrect code, try again.",
            buttonContinueText: "Continue"
        },
        es: {
            titleCBAC: "Ingrese su Código BAC",
            descriptionCBAC: "¡Revise tu teléfono! <br> Le enviamos su Código BAC por SMS al teléfono celular ",
            footerCBAC: "¿No recibió el código?",
            footerResendLink: "Reenviar SMS",
            linkNoAccess: "No tengo acceso a Código BAC",
            incorrectCBAC: "Código incorrecto, intente de nuevo.",
            buttonContinueText: "Continuar"
        }
    },
    {
        module_class: 'CBAC',
        en: {
            titleCBAC: "Enter your Código BAC",
            linkNoAccess: "I do not have access to Código BAC",
            incorrectCBAC: "Incorrect code, try again.",
            buttonContinueText: "Continue"
        },
        es: {
            titleCBAC: "Ingrese su Código BAC",
            linkNoAccess: "No tengo acceso a Código BAC",
            incorrectCBAC: "Código incorrecto, intente de nuevo.",
            buttonContinueText: "Continuar"
        }
    },
    {
        module_class: 'Token',
        en: {
            titleToken: "Enter your token device code",
            descriptionToken: "Enter the code that appears on your physical device or digital token.",
            linkNoAccess: "I do not have access to Código BAC",
            incorrectToken: "Incorrect code, try again.",
            buttonContinueText: "Continue"
        },
        es: {
            titleToken: "Ingrese el código de su dispositivo token",
            descriptionToken: "Digite el código que aparece en su dispositivo físico o digital token.",
            linkNoAccess: "No tengo acceso a dispositivo token",
            incorrectToken: "Código incorrecto, intente de nuevo.",
            buttonContinueText: "Continuar"
        }
    }
];

"use strict";
var SupportedLanguages;
(function (SupportedLanguages) {
    SupportedLanguages["ES"] = "es";
    SupportedLanguages["EN"] = "en";
})(SupportedLanguages || (SupportedLanguages = {}));
class Multilanguage {
    constructor(lang) {
        let componen_messages = config_labels.filter((module_messages) => module_messages.module_class == this.constructor.name);
        if (!componen_messages) {
            componen_messages = config_labels.filter((module_messages) => module_messages.module_class == 'default');
        }
        if (lang) {
            this.labels = componen_messages[0][lang];
        }
        else {
            this.labels = componen_messages[0].es;
        }
    }
}

"use strict";
class BaseTable extends Multilanguage {
    constructor(options) {
        super(options.lang);
        this.hasSubRows = false;
        this.columsAcount = 0;
        this.setting = options;
        this.defineRootTableElement();
        this.renderTBody();
    }
    defineRootTableElement() {
        if (this.setting.rootElement instanceof HTMLTableElement) {
            this.defineTableSchema();
            this.applyBlueStyles();
        }
        else {
            if (this.setting.container_id) {
                let htmlRootElement = document.getElementById(this.setting.container_id);
                if (htmlRootElement) {
                    if (htmlRootElement instanceof HTMLTableElement) {
                        this.setting.rootElement = htmlRootElement;
                        this.defineTableSchema();
                        this.applyBlueStyles();
                    }
                    else {
                        this.setting.rootElement = this.createHtmlTable();
                        htmlRootElement.appendChild(this.setting.rootElement);
                        this.doFilter();
                    }
                }
                else {
                    throw new Error("Invalid rootElement");
                }
            }
        }
        Parent.addBlueStyles(this.setting.rootElement);
    }
    defineTableSchema() {
        if (!this.setting.tableSchema) {
            this.tableHtmlToJson();
        }
    }
    tableHtmlToJson() {
        if (!this.setting.rootElement) {
            console.error("No se ha encontrado la tabla con el id proporcionado");
        }
        else {
            if (!this.setting.id) {
                this.setting.id = BLUEUtils.makeRandomId(15);
                this.setting.rootElement.id = this.setting.id;
            }
            this.setting.tableSchema = {
                tHeader: this.createObjectHeader(),
                tBody: this.createObjectBody(),
                tFooter: this.createObjectFooter(),
            };
            this.filteredData = this.setting.tableSchema.tBody;
        }
    }
    createObjectHeader() {
        var _a;
        if ((_a = this.setting.rootElement) === null || _a === void 0 ? void 0 : _a.tHead) {
            let tHeader = new Array();
            let indexHead = 0;
            for (const tHead of this.setting.rootElement.tHead.rows[0].children) {
                tHeader.push({ "content": `${tHead.innerHTML}`, "width": `${tHead.getAttribute("width")}`, "record_property": `td${indexHead++}` });
            }
            return tHeader;
        }
        return undefined;
    }
    createObjectBody() {
        let result = new Array();
        if (this.setting.rootElement.tBodies) {
            for (const tBody of this.setting.rootElement.tBodies) {
                tBody.id = `tbody${this.setting.id}`;
                this.createRecords(tBody, result);
            }
        }
        else {
            throw new Error("La tabla proporcionada debe tener tbody");
        }
        return result;
    }
    createRecords(tBody, result) {
        var _a;
        let rowIndex = 0;
        let record = {};
        for (const tRow of tBody.rows) {
            this.columsAcount = tRow.cells.length;
            if (!tRow.getAttribute('for')) {
                record = {};
                if (this.setting.rootElement.tHead && ((_a = this.setting.rootElement.tHead) === null || _a === void 0 ? void 0 : _a.rows[0].cells.length) == tRow.cells.length) {
                    let index = 0;
                    record = this.addStatusClassToRecord(tRow, record);
                    ({ record, index } = this.addPropertiesToRecord(tRow, record, index));
                    record = this.addSubRowContentToRecord(tRow, record);
                    result.push(record);
                }
                else {
                    throw new Error(`La fila ${rowIndex} no tiene la misma cantidad de columnas que el encabezado`);
                }
                rowIndex++;
            }
        }
    }
    addPropertiesToRecord(tRow, record, index) {
        for (let tData of tRow.children) {
            record = Object.assign(Object.assign({}, record), { [`td${index++}`]: `${tData.innerHTML}` });
        }
        return { record, index };
    }
    addStatusClassToRecord(tRow, record) {
        for (let className of tRow.classList) {
            if (className.includes('b-left-color-')) {
                record = { [`recordStatus`]: className };
            }
        }
        return record;
    }
    addSubRowContentToRecord(tRow, record) {
        var _a;
        let aSubRow = document.querySelector(`[for="${tRow.id}"]`);
        if (aSubRow) {
            const contend = (_a = aSubRow.firstElementChild) === null || _a === void 0 ? void 0 : _a.innerHTML;
            if (contend) {
                record = Object.assign(Object.assign({}, record), { [`subRowHtmlContent`]: `${contend}` });
                this.hasSubRows = true;
                this.columsAcount = tRow.cells.length + 1;
            }
        }
        return record;
    }
    createObjectFooter() {
        var _a;
        if ((_a = this.setting.rootElement) === null || _a === void 0 ? void 0 : _a.tFoot) {
            let tableFooter = new Array();
            let indexFoot = 0;
            for (const tFoot of this.setting.rootElement.tFoot.rows[0].children) {
                tableFooter.push({ content: tFoot.innerHTML });
            }
            return tableFooter;
        }
        return undefined;
    }
    filterBy(filterPredicate) {
        if (filterPredicate) {
            this.setting.filterPredicate = filterPredicate;
        }
        this.doFilter();
        this.doSearch();
        this.renderTBody();
    }
    doFilter() {
        var _a, _b;
        if (this.setting.filterPredicate) {
            this.filteredData = (_a = this.setting.tableSchema) === null || _a === void 0 ? void 0 : _a.tBody.filter(this.setting.filterPredicate);
        }
        else {
            this.filteredData = (_b = this.setting.tableSchema) === null || _b === void 0 ? void 0 : _b.tBody;
        }
    }
    updateData(data) {
        var _a, _b;
        if (((_a = this.setting.tableSchema) === null || _a === void 0 ? void 0 : _a.tBody) && data) {
            this.setting.tableSchema.tBody = data;
            this.filteredData = (_b = this.setting.tableSchema) === null || _b === void 0 ? void 0 : _b.tBody;
            this.renderTBody();
        }
    }
    //SECCION BUSQUEDA
    search(key) {
        this.doFilter();
        this.setting.searchKey = key;
        if (key && key != '') {
            this.doSearch();
        }
        this.renderTBody();
    }
    doSearch() {
        var _a, _b;
        let key = this.setting.searchKey;
        let headers = (_a = this.setting.tableSchema) === null || _a === void 0 ? void 0 : _a.tHeader;
        if (key && key != '') {
            this.filteredData = (_b = this.filteredData) === null || _b === void 0 ? void 0 : _b.filter(function (record) {
                let result = false;
                for (let prop in record) {
                    if (headers) {
                        result = (headers.filter(cell => cell.record_property == prop).length > 0) && ('' + record[prop]).includes(key);
                    }
                    else {
                        result = ('' + record[prop]).includes(key);
                    }
                    if (result) {
                        return true;
                    }
                }
                return result;
            });
        }
    }
}

"use strict";

"use strict";
//CLASES PARA APLICACION DE ESTILOS
class Parent {
    static addBlueStyles(container) {
        var _a;
        (_a = container.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('table-container');
    }
}
class Table {
    static addBlueStyles(table) {
        table.classList.add('blue-table');
    }
}
class THead {
    static addBlueStyles(tHead) {
        tHead.classList.add('table-header');
    }
}
class TBody {
    static addBlueStyles(tBody) {
        tBody.classList.add('tBody');
    }
}
class TFoot {
    static addBlueStyles(tFoot) {
        tFoot.classList.add('tFoot');
    }
}
class TrFoot {
    static addBlueStyles(tr) {
        tr.classList.add('tFoot');
    }
}
class TdFoot {
    static addBlueStyles(td) {
        td.classList.add('TrFoot');
    }
}
class Td {
    static addBlueStyles(cell) {
        cell.classList.add('table-data');
    }
}
class SubRow {
    static addBlueStyles(tr) {
        tr.classList.add('d-none', 'table-row-body-subrow');
    }
}
class TdParent {
    static addBlueStyles(cell) {
        cell.classList.add('table-data', 'table-data-parent');
    }
    static addBlueStylesMobile(cell) {
        cell.classList.add('table-data-parent-mobile');
    }
    static addBlueStylesContentMobile(cell) {
        cell.classList.add('table-data', 'subrow-content-mobile', 'd-none');
    }
}
class ThParent {
    static addBlueStyles(cell) {
        cell.classList.add('table-data-header-parent');
    }
}
class Th {
    static addBlueStyles(cell) {
        cell.classList.add('table-head');
    }
}
class TrHead {
    static addBlueStyles(row) {
        row.classList.add('table-row');
    }
}
class Tr {
    static addBlueStyles(row) {
        row.classList.add('table-row', 'table-row-body');
    }
    static setStatus(row, record, trStatusSchema) {
        if (trStatusSchema) {
            let trStatus;
            for (const element of trStatusSchema) {
                if (element.predicate(record)) {
                    trStatus = element;
                }
            }
            if (trStatus) {
                ;
                row.classList.add('b-left', 'b-left-width-xxl', 'b-left-color-' + trStatus.colorClass);
            }
        }
        if (record['recordStatus']) {
            row.classList.add('b-left', 'b-left-width-xxl', record['recordStatus']);
        }
    }
}

"use strict";
class BlueTable extends BaseTable {
    constructor(options) {
        super(options);
    }
    createHtmlTable() {
        if (this.setting.tableSchema) {
            let htmlTable = document.createElement('table');
            this.setting.id = (this.setting.id) ? this.setting.id : BLUEUtils.makeRandomId(15);
            htmlTable.setAttribute('id', this.setting.id);
            Table.addBlueStyles(htmlTable);
            this.createTableHeader(htmlTable);
            this.createemptyTableBody(htmlTable);
            this.createTableFooter(htmlTable);
            return htmlTable;
        }
        else {
            throw new Error("Debe especificar el esquema de tabla");
        }
    }
    createemptyTableBody(htmlTable) {
        let tbody = document.createElement('tbody');
        tbody.setAttribute('id', `tbody${this.setting.id}`);
        htmlTable.appendChild(tbody);
    }
    createTableFooter(htmlTable) {
        var _a;
        if ((_a = this.setting.tableSchema) === null || _a === void 0 ? void 0 : _a.tFooter) {
            let tFoot = document.createElement('tfoot');
            TFoot.addBlueStyles(tFoot);
            let row = document.createElement('tr');
            TrFoot.addBlueStyles(row);
            for (let foot of this.setting.tableSchema.tFooter) {
                let td = document.createElement('td');
                TdFoot.addBlueStyles(td);
                td.innerHTML = (foot.content instanceof Function) ? foot.content() : foot.content;
                row.appendChild(td);
            }
            tFoot.appendChild(row);
            htmlTable.appendChild(tFoot);
        }
    }
    createTableHeader(htmlTable) {
        var _a, _b;
        if ((_a = this.setting.tableSchema) === null || _a === void 0 ? void 0 : _a.tHeader) {
            let thead = document.createElement('thead');
            THead.addBlueStyles(thead);
            let row = document.createElement('tr');
            TrHead.addBlueStyles(row);
            if ((_b = this.setting.tableSchema) === null || _b === void 0 ? void 0 : _b.subRowTemplate) {
                this.addSubRowHeader(row);
            }
            this.columsAcount = (this.setting.tableSchema.subRowTemplate && !(this.setting.tableSchema.subRowTemplate instanceof Function)) ? this.setting.tableSchema.tHeader.length + 1 : this.setting.tableSchema.tHeader.length;
            for (let head of this.setting.tableSchema.tHeader) {
                let th = document.createElement('th');
                th.setAttribute('scope', 'col');
                Th.addBlueStyles(th);
                th.innerHTML = head.content;
                if (head.width) {
                    th.setAttribute('width', head.width);
                }
                row.appendChild(th);
            }
            thead.appendChild(row);
            htmlTable.appendChild(thead);
        }
    }
    addSubRowHeader(row) {
        let th = document.createElement('th');
        ThParent.addBlueStyles(th);
        row.prepend(th);
    }
    addSubRowButton(row) {
        row.setAttribute('id', BLUEUtils.makeRandomId(15));
        let seeSubRowBotton = document.createElement('td');
        seeSubRowBotton.setAttribute('id', `tdSubRowBotton${row.id}`);
        TdParent.addBlueStyles(seeSubRowBotton);
        seeSubRowBotton.innerHTML = `<span class="icons chevron-down-block-after icons-xs c-interaction-low transition-icons"></span>`;
        row.prepend(seeSubRowBotton);
        let subRowContentMobile = document.createElement('td');
        subRowContentMobile.setAttribute('id', `subRowContentMobile${row.id}`);
        TdParent.addBlueStylesContentMobile(subRowContentMobile);
        row.appendChild(subRowContentMobile);
        let seeSubRowBottonMobile = document.createElement('td');
        seeSubRowBottonMobile.setAttribute('id', `tdBotton${row.id}`);
        TdParent.addBlueStylesMobile(seeSubRowBottonMobile);
        seeSubRowBottonMobile.innerHTML = `<span class="see-more-subrow typography-link" id="showMore${row.id}">${this.labels.see_more}</span><span id="chevron${row.id}" class="icons chevron-down-block-after icons-xxs c-interaction-low transition-icons m-x-s"></span> `;
        row.appendChild(seeSubRowBottonMobile);
    }
    applyBlueStyles() {
        if (this.setting.rootElement instanceof HTMLTableElement) {
            Table.addBlueStyles(this.setting.rootElement);
            this.applyHeaderStyle();
            this.applyFooterStyle();
        }
    }
    applyFooterStyle() {
        var _a;
        if ((_a = this.setting.rootElement) === null || _a === void 0 ? void 0 : _a.tFoot) {
            TFoot.addBlueStyles(this.setting.rootElement.tFoot);
            for (let tr of this.setting.rootElement.tFoot.rows) {
                TrFoot.addBlueStyles(tr);
                for (let td of tr.cells) {
                    TdFoot.addBlueStyles(td);
                }
            }
        }
    }
    applyHeaderStyle() {
        var _a;
        if ((_a = this.setting.rootElement) === null || _a === void 0 ? void 0 : _a.tHead) {
            THead.addBlueStyles(this.setting.rootElement.tHead);
            if (this.hasSubRows) {
                this.addSubRowHeader(this.setting.rootElement.tHead.rows[0]);
                this.columsAcount = this.setting.rootElement.tHead.rows[0].cells.length;
            }
            for (let trHead of this.setting.rootElement.tHead.rows) {
                TrHead.addBlueStyles(trHead);
                for (let th of trHead.cells) {
                    th.setAttribute('scope', 'col');
                    Th.addBlueStyles(th);
                }
            }
        }
    }
    renderTBody() {
        if (this.setting.id) {
            let tbody = document.getElementById(`tbody${this.setting.id}`);
            if (tbody) {
                tbody.innerHTML = '';
                if (this.setting.tableSchema) {
                    if (this.filteredData && this.filteredData.length > 0) {
                        this.addRows(tbody);
                    }
                    else {
                        this.showEmptyResult(tbody);
                    }
                }
            }
        }
    }
    addRows(tbody) {
        if (this.filteredData && this.setting.tableSchema) {
            for (let record of this.filteredData) {
                let row = document.createElement('tr');
                Tr.addBlueStyles(row);
                Tr.setStatus(row, record, this.setting.trStatus);
                this.addColumns(record, row);
                if (this.setting.tableSchema.subRowTemplate || record.subRowHtmlContent || this.hasSubRows) {
                    this.calculateSpanColumnsAoount(record);
                    this.addSubRowButton(row);
                }
                tbody.appendChild(row);
                this.addSubRow(record, row, tbody);
            }
        }
    }
    addSubRow(record, row, tbody) {
        let subRowHtmlContent;
        subRowHtmlContent = this.getSubRowContent(subRowHtmlContent, record);
        if (subRowHtmlContent) {
            this.createSubRow(record, subRowHtmlContent, row, tbody);
        }
        else {
            this.hideSubRowBotton(row);
        }
    }
    showEmptyResult(tbody) {
        var _a, _b;
        if (this.setting.tableSchema) {
            let row = document.createElement('tr');
            Tr.addBlueStyles(row);
            let td = document.createElement('td');
            Td.addBlueStyles(td);
            let columsAcount = ((_a = this.setting.tableSchema) === null || _a === void 0 ? void 0 : _a.tHeader) ? (_b = this.setting.tableSchema) === null || _b === void 0 ? void 0 : _b.tHeader.length : Object.keys(this.setting.tableSchema.tBody).length;
            if (this.setting.tableSchema.subRowTemplate) {
                columsAcount++;
            }
            td.setAttribute('colspan', `${columsAcount}`);
            td.innerHTML = `${this.labels.has_not_records}`;
            row.appendChild(td);
            tbody.appendChild(row);
        }
    }
    hideSubRowBotton(row) {
        var _a;
        let tdSubRowBotton = document.getElementById(`tdSubRowBotton${row.id}`);
        if (tdSubRowBotton) {
            tdSubRowBotton.classList.add('cursor-default');
            tdSubRowBotton.innerHTML = '';
        }
        (_a = document.getElementById(`tdBotton${row.id}`)) === null || _a === void 0 ? void 0 : _a.classList.add('d-none');
    }
    createSubRow(record, subRowHtmlContent, row, tbody) {
        record.subRowHtmlContent = subRowHtmlContent;
        let subRowHr = document.createElement('tr');
        Tr.setStatus(subRowHr, record, this.setting.trStatus);
        SubRow.addBlueStyles(subRowHr);
        subRowHr.setAttribute('for', `${row.id}`);
        let horizontalLine = document.createElement('hr');
        horizontalLine.classList.add('hr-primary');
        let tdLine = document.createElement('td');
        tdLine.setAttribute("colspan", `${this.columsAcount}`);
        tdLine.classList.add('p-x-m');
        tdLine.append(horizontalLine);
        subRowHr.append(tdLine);
        tbody.appendChild(subRowHr);
        let subRow = document.createElement('tr');
        subRow.setAttribute('for', `${row.id}`);
        Tr.addBlueStyles(subRow);
        SubRow.addBlueStyles(subRow);
        Tr.setStatus(subRow, record, this.setting.trStatus);
        let tdSubRowContainer = document.createElement('td');
        tdSubRowContainer.setAttribute('id', `tdContainer${row.id}`);
        tdSubRowContainer.setAttribute('colspan', `${this.columsAcount}`);
        Td.addBlueStyles(tdSubRowContainer);
        if (subRowHtmlContent instanceof HTMLElement) {
            tdSubRowContainer.appendChild(subRowHtmlContent);
        }
        else {
            tdSubRowContainer.innerHTML = subRowHtmlContent;
        }
        subRow.appendChild(tdSubRowContainer);
        tbody.appendChild(subRow);
        this.showSubRowBottonBehavior(row);
        this.showSubRowBottonBehaviorMobile(row);
        this.hasSubRows = true;
    }
    showSubRowBottonBehaviorMobile(row) {
        let tdSubRowBottonMobile = row.lastChild;
        if (tdSubRowBottonMobile) {
            tdSubRowBottonMobile.addEventListener('click', () => {
                let tdMobileContainer = document.querySelector(`[id="subRowContentMobile${row.id}"]`);
                if (tdMobileContainer) {
                    tdMobileContainer.classList.toggle('d-none');
                    if (tdMobileContainer.innerHTML == '') {
                        this.getSuwRowFromFullScreenView(row, tdMobileContainer);
                    }
                    this.chevronBehavior(row, tdMobileContainer);
                }
            });
        }
    }
    getSuwRowFromFullScreenView(row, tdMobileContainer) {
        let tdSubRowContainer = document.querySelector(`[id="tdContainer${row.id}"]`);
        if (tdSubRowContainer) {
            tdMobileContainer.innerHTML = tdSubRowContainer.innerHTML;
            tdSubRowContainer.innerHTML = '';
        }
    }
    chevronBehavior(row, tdMobileContainer) {
        var _a, _b;
        let showMoreBotton = document.querySelector(`[id="showMore${row.id}"]`);
        if (showMoreBotton) {
            showMoreBotton.innerHTML = tdMobileContainer.classList.contains('d-none') ? this.labels.see_more : this.labels.see_less;
            (_a = document.querySelector(`[id="chevron${row.id}"]`)) === null || _a === void 0 ? void 0 : _a.classList.toggle('chevron-down-block-after');
            (_b = document.querySelector(`[id="chevron${row.id}"]`)) === null || _b === void 0 ? void 0 : _b.classList.toggle('chevron-up-block-after');
        }
    }
    showSubRowBottonBehavior(row) {
        let tdSubRowBotton = row.firstChild;
        if (tdSubRowBotton) {
            tdSubRowBotton.addEventListener('click', () => {
                let parentRow = document.querySelector(`[id="${row.id}"]`);
                parentRow === null || parentRow === void 0 ? void 0 : parentRow.classList.toggle('subrow-background');
                parentRow === null || parentRow === void 0 ? void 0 : parentRow.classList.toggle('b-bottom-none');
                tdSubRowBotton.children[0].classList.toggle('chevron-down-block-after');
                tdSubRowBotton.children[0].classList.toggle('chevron-up-block-after');
                let containerTd = document.querySelector(`[id="tdContainer${row.id}"]`);
                if (containerTd) {
                    if (containerTd.innerHTML == '') {
                        this.getSubRowContentFromMobileView(row, containerTd);
                    }
                }
                this.hideSubRows(row);
            });
        }
    }
    hideSubRows(row) {
        let allSubRows = document.querySelectorAll(`[for="${row.id}"]`);
        for (let aSubRow of allSubRows) {
            aSubRow === null || aSubRow === void 0 ? void 0 : aSubRow.classList.toggle('d-none');
        }
    }
    getSubRowContentFromMobileView(row, containerTd) {
        let tdMobileContainer = document.querySelector(`[id="subRowContentMobile${row.id}"]`);
        if (tdMobileContainer) {
            containerTd.innerHTML = tdMobileContainer.innerHTML;
            tdMobileContainer.innerHTML = '';
        }
    }
    getSubRowContent(subRowHtmlContent, record) {
        if (this.setting.tableSchema) {
            if (this.setting.tableSchema.subRowTemplate) {
                subRowHtmlContent = this.subRowContentBySchema(subRowHtmlContent, record);
            }
            else if (record.subRowHtmlContent) {
                subRowHtmlContent = record.subRowHtmlContent;
            }
            return subRowHtmlContent;
        }
    }
    subRowContentBySchema(subRowHtmlContent, record) {
        var _a;
        if ((_a = this.setting.tableSchema) === null || _a === void 0 ? void 0 : _a.subRowTemplate) {
            if (this.setting.tableSchema.subRowTemplate instanceof Function) {
                subRowHtmlContent = this.setting.tableSchema.subRowTemplate(record);
            }
            else if (this.setting.tableSchema.subRowTemplate instanceof HTMLElement) {
                subRowHtmlContent = this.setting.tableSchema.subRowTemplate;
            }
            else {
                let htmlTemplate = this.setting.tableSchema.subRowTemplate;
                let hasMatch = true;
                while (hasMatch) {
                    ({ htmlTemplate, hasMatch } = this.replaceProperties(htmlTemplate, record, hasMatch));
                }
                if (htmlTemplate) {
                    subRowHtmlContent = htmlTemplate;
                }
            }
            return subRowHtmlContent;
        }
    }
    replaceProperties(htmlTemplate, record, hasMatch) {
        const regex = /\$\{(.+?)\}/g;
        const match = regex.exec(htmlTemplate);
        if (match) {
            htmlTemplate = htmlTemplate.replace(match[0], record[match[1]]);
        }
        else {
            hasMatch = false;
        }
        return { htmlTemplate, hasMatch };
    }
    calculateSpanColumnsAoount(record) {
        var _a;
        if ((_a = this.setting.tableSchema) === null || _a === void 0 ? void 0 : _a.tHeader) {
            this.columsAcount = this.setting.tableSchema.tHeader.length + 1;
        }
        else {
            this.columsAcount = Object.keys(record).length + 1;
            if (record.subRowHtmlContent) {
                this.columsAcount = Object.keys(record).length;
                if (record.recordStatus) {
                    this.columsAcount = Object.keys(record).length - 1;
                }
            }
        }
    }
    addColumns(record, row) {
        var _a;
        if ((_a = this.setting.tableSchema) === null || _a === void 0 ? void 0 : _a.tHeader) {
            let columIndex = 0;
            for (let headerTd of this.setting.tableSchema.tHeader) {
                let td = document.createElement('td');
                if (columIndex == 0) {
                    td.setAttribute('scope', 'row');
                }
                td.setAttribute('data-label', headerTd.content);
                Td.addBlueStyles(td);
                td.innerHTML = record[headerTd.record_property];
                row.appendChild(td);
                columIndex++;
            }
        }
        else {
            let columIndex = 0;
            for (let prop in record) {
                let td = document.createElement('td');
                if (columIndex == 0) {
                    td.setAttribute('scope', 'row');
                }
                td.setAttribute('data-label', prop);
                Td.addBlueStyles(td);
                td.innerHTML = record[prop];
                row.appendChild(td);
            }
        }
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- scontreras
// WORKTEAM: ----- Onix
// version 1.0
var AlertMessageOrderEnum;
(function (AlertMessageOrderEnum) {
    AlertMessageOrderEnum["TITLE_DESCRIPTION"] = "TITLE_DESCRIPTION";
    AlertMessageOrderEnum["TITLE_DESCRIPTION_BUTTON"] = "TITLE_DESCRIPTION_BUTTON";
    AlertMessageOrderEnum["ONLY_DESCRIPTION"] = "ONLY_DESCRIPTION";
    AlertMessageOrderEnum["DESCRIPTION_BUTTON"] = "DESCRIPTION_BUTTON";
    AlertMessageOrderEnum["DESCRIPTION_LINK"] = "DESCRIPTION_LINK";
    AlertMessageOrderEnum["DESCRIPTION_BUTTON_LINK"] = "DESCRIPTION_BUTTON_LINK";
})(AlertMessageOrderEnum || (AlertMessageOrderEnum = {}));
class AlertMessage {
    constructor(options) {
        this.options = options;
        this.mainClassName = "alert-message";
        this.mainContainerElement = document.createElement("div");
        this.statusContainerElement = document.createElement("div");
        this.statusIconElement = document.createElement("span");
        this.titleContainerElement = document.createElement("div");
        this.titleElement = document.createElement("h3");
        this.contentContainerElement = document.createElement("div");
        this.contentMessageElement = document.createElement("p");
        this.buttonContainerElement = document.createElement("div");
        this.buttonElement = document.createElement("button");
        this.linkContainerElement = document.createElement("div");
        this.linkElement = document.createElement("a");
        this.order = AlertMessageOrderEnum.TITLE_DESCRIPTION;
        this.type = options.type;
        this.icon = options.icon;
        this.bgColor = options.bgColor;
        this.title = options.title;
        this.description = options.description;
        this.button = options.button;
        this.link = options.link;
        this.linkUrl = options.linkUrl;
        this.init();
    }
    addTitle() {
        this.mainContainerElement.appendChild(this.titleContainerElement);
        this.titleContainerElement.appendChild(this.titleElement);
        if (this.title) {
            this.titleElement.appendChild(document.createTextNode(this.title));
        }
    }
    addDescription() {
        this.mainContainerElement.appendChild(this.contentContainerElement);
        this.contentContainerElement.appendChild(this.contentMessageElement);
        if (this.description) {
            this.contentMessageElement.appendChild(document.createTextNode(this.description));
        }
    }
    addButton() {
        this.mainContainerElement.appendChild(this.buttonContainerElement);
        this.buttonContainerElement.appendChild(this.buttonElement);
        if (this.button) {
            this.buttonElement.appendChild(document.createTextNode(this.button));
        }
    }
    addLink() {
        this.mainContainerElement.appendChild(this.linkContainerElement);
        this.linkContainerElement.appendChild(this.linkElement);
        if (this.link && this.linkUrl) {
            this.linkElement.appendChild(document.createTextNode(this.link));
            this.linkElement.setAttribute("href", this.linkUrl);
            this.linkElement.setAttribute("target", "_blank");
        }
    }
    updateInternalOrder() {
        if (this.title && this.description && !this.link && !this.button) {
            this.order = AlertMessageOrderEnum.TITLE_DESCRIPTION;
        }
        else if (this.title && this.description && !this.link && this.button) {
            this.order = AlertMessageOrderEnum.TITLE_DESCRIPTION_BUTTON;
        }
        else if (!this.title && this.description && !this.link && !this.button) {
            this.order = AlertMessageOrderEnum.ONLY_DESCRIPTION;
        }
        else if (!this.title && this.description && !this.link && this.button) {
            this.order = AlertMessageOrderEnum.DESCRIPTION_BUTTON;
        }
        else if (!this.title && this.description && this.link && !this.button) {
            this.order = AlertMessageOrderEnum.DESCRIPTION_LINK;
        }
        else if (!this.title && this.description && this.link && this.button) {
            this.order = AlertMessageOrderEnum.DESCRIPTION_BUTTON_LINK;
        }
    }
    // Se establece el orden de las alertas
    setOrder(order) {
        switch (order) {
            case AlertMessageOrderEnum.TITLE_DESCRIPTION:
                this.mainContainerElement.classList.add(`${this.mainClassName}_title_description`);
                break;
            case AlertMessageOrderEnum.TITLE_DESCRIPTION_BUTTON:
                this.mainContainerElement.classList.add(`${this.mainClassName}_title_description_button`);
                break;
            case AlertMessageOrderEnum.ONLY_DESCRIPTION:
                this.mainContainerElement.classList.add(`${this.mainClassName}_only_description`);
                break;
            case AlertMessageOrderEnum.DESCRIPTION_BUTTON:
                this.mainContainerElement.classList.add(`${this.mainClassName}_description_button`);
                break;
            case AlertMessageOrderEnum.DESCRIPTION_LINK:
                this.mainContainerElement.classList.add(`${this.mainClassName}_description_link`);
                break;
            case AlertMessageOrderEnum.DESCRIPTION_BUTTON_LINK:
                this.mainContainerElement.classList.add(`${this.mainClassName}_description_button_link`);
                break;
            default:
                throw new Error("La orden asignada no es valida.");
        }
        return this;
    }
    // Se establecen las clases globales de las alertas
    setStyles() {
        // Se agregan las clases utilitarias a los elementos
        this.mainContainerElement.classList.add(`${this.mainClassName}`);
        this.contentContainerElement.classList.add(`${this.mainClassName}_content`);
        this.statusContainerElement.classList.add(`${this.mainClassName}_status`);
        this.titleContainerElement.classList.add(`${this.mainClassName}_title`);
        this.titleElement.classList.add("typography-h3");
        this.buttonContainerElement.classList.add(`${this.mainClassName}_button`);
        this.buttonElement.classList.add("btn", "btn-default");
        this.linkContainerElement.classList.add(`${this.mainClassName}_link`);
        this.linkElement.classList.add("typography-link");
        this.contentMessageElement.classList.add("typography-p");
        this.setStatusStyles();
        return this;
    }
    // Se establecen los elementos organizados en funciones
    setChildren() {
        this.mainContainerElement.appendChild(this.statusContainerElement);
        this.statusContainerElement.appendChild(this.statusIconElement);
        if (this.title)
            this.addTitle();
        if (this.description)
            this.addDescription();
        if (this.button)
            this.addButton();
        if (this.link)
            this.addLink();
        return this;
    }
    // Se establecen los estilos de los estados
    setStatusStyles(backgroundColorClass = this.bgColor, icon = this.icon) {
        this.statusContainerElement.classList.add(`${this.mainClassName}_status`);
        this.statusContainerElement.classList.add(`${this.mainClassName}_status`);
        if (!!backgroundColorClass) {
            this.statusContainerElement.classList.add(backgroundColorClass);
        }
        this.statusIconElement.classList.add("icons", icon, "icons-after-3xl", "c-white");
        return this;
    }
    render(id) {
        if (!id) {
            throw new Error('El "id" es necesario para renderizar el elemento');
        }
        const rootElement = document.getElementById(id);
        if (!rootElement) {
            throw new Error(`No se encontró ningún elemento con el id ${id}`);
        }
        rootElement.appendChild(this.mainContainerElement);
        return this;
    }
    // Se inicializan las funciones
    init() {
        this.updateInternalOrder();
        this.setOrder(this.order);
        this.setStyles();
        this.setChildren();
        return this;
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define funcionalidad y animacion de los botones
// AUTHOR: ------- SContreras, ARamirez
// WORKTEAM: ----- Onix
// version 1.0
/***
 * @name createRipple
 * @description Funcion que  crea la animacion para los botones
 */
function createRipple(element, event) {
    const circle = document.createElement("span");
    const ripple = element.getElementsByClassName("ripple")[0];
    circle.style.width = element.clientWidth + "px";
    circle.style.height = element.clientHeight + "px";
    circle.style.left = (event.layerX * 2) - (element.clientWidth / 2) - (event.offsetX / 2) + "px";
    circle.style.top = 0 + "px";
    circle.classList.add("ripple");
    if (ripple)
        ripple.remove();
    element.appendChild(circle);
}
/***
 * @name window.addEventListener
 * @description Llamada a la funcion createRipple despues de que la pantalla este cargada,
 * para agregarle a los botones primario la animacion
 */
document.addEventListener("click", (event) => {
    let elementClick = event.target;
    if (elementClick.matches(".btn-primary")) {
        createRipple(elementClick, event);
    }
});
/***
 * @name window.addEventListener
 * @description Llamada a la funcion createRipple despues de que la pantalla este cargada,
 * para agregarle a los botones primario la animacion
 */
window.addEventListener("load", () => {
    loadBLUE();
});

"use strict";
function closeCardToolTip(containerId) {
    const container = document.querySelector(`#${containerId}`);
    if (container != null) {
        container.classList.remove("d-block");
        container.classList.add("d-none");
    }
}
function orientationRightOpen(container, containerPositionHorizontal, containerPositionTop) {
    container.style.cssText = "left: " + containerPositionHorizontal + "px; top: " + containerPositionTop + "px;";
    container.classList.add("v-hidden");
    container.classList.add("d-block");
    container.classList.remove("d-none");
    let leftContainer = container.getBoundingClientRect().left;
    let beforeContainer = container.querySelector("::before");
    container.classList.add("d-none");
    container.classList.remove("v-hidden");
    container.classList.remove("d-block");
    if (leftContainer < 0 || leftContainer < 5) {
        let cardtoltipRightBefore = leftContainer < 0 ? 18 - 5 + leftContainer : 18 - 5 - leftContainer;
        if (beforeContainer) {
            beforeContainer.style.cssText = "left: " + cardtoltipRightBefore + "px;";
        }
        container.style.cssText = "left: 5px; top: " + containerPositionTop + "px;";
    }
    if (299 + leftContainer > screen.width) {
        container.style.cssText = "left: " + containerPositionHorizontal + "px; top: " + containerPositionTop + "px; min-width: " + (screen.width - leftContainer - 5) + "px;";
    }
}
function orientationLeftOpen(container, containerPositionHorizontal, containerPositionTop) {
    container.style.cssText = "right: " + containerPositionHorizontal + "px; top: " + containerPositionTop + "px";
    container.classList.add("v-hidden");
    container.classList.add("d-block");
    container.classList.remove("d-none");
    let xPositionContainer = container.getBoundingClientRect().x;
    let rightConatiner = screen.width - container.getBoundingClientRect().x;
    let beforeContainer = container.querySelector("::before");
    container.classList.add("d-none");
    container.classList.remove("v-hidden");
    container.classList.remove("d-block");
    const width = 299;
    if (xPositionContainer < 5) {
        let widthContainer = xPositionContainer < 0 ? width + xPositionContainer - 5 : width - xPositionContainer - 5;
        container.style.cssText = "right: " + containerPositionHorizontal + "px; top: " + containerPositionTop + "px; min-width: " + widthContainer + "px;";
    }
    if (rightConatiner < 5) {
        container.style.cssText = "right: " + 5 + "px; top: " + containerPositionTop + "px;";
        let cardtoltipLeftBefore = rightConatiner < 0 ? 18 - 5 + rightConatiner : 18 - 5 - rightConatiner;
        if (beforeContainer) {
            beforeContainer.style.cssText = "right: " + cardtoltipLeftBefore + "px;";
        }
    }
}
function openCardToolTip(containerId, element) {
    const container = document.querySelector(`#${containerId}`);
    let containerPositionTop = element.offsetTop + element.offsetHeight;
    let containerPositionHorizontal = (element.offsetLeft + element.offsetWidth / 2) - 23.5;
    let width = 0;
    let orientation = "right";
    container === null || container === void 0 ? void 0 : container.removeAttribute(`style`);
    if (container != null) {
        if (container === null || container === void 0 ? void 0 : container.classList.contains('card-tooltip-left')) {
            orientation = "left";
            let offsetParentElement = element.offsetParent;
            let valOffsetParent = offsetParentElement === null || offsetParentElement === void 0 ? void 0 : offsetParentElement.offsetWidth;
            containerPositionHorizontal = (valOffsetParent - (element.offsetLeft + (element.offsetWidth / 2))) - 23.5;
        }
        else {
            if (!(container === null || container === void 0 ? void 0 : container.classList.contains('card-tooltip-right'))) {
                container.classList.add("card-tooltip-right");
            }
        }
        if (orientation === "right") {
            orientationRightOpen(container, containerPositionHorizontal, containerPositionTop);
        }
        else {
            orientationLeftOpen(container, containerPositionHorizontal, containerPositionTop);
        }
        container.classList.add("d-block");
        container.classList.remove("d-none");
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define funcinalidad de los checkbox
// AUTHOR: ------- SContreras, ARamirez
// WORKTEAM: ----- Onix
// version 1.0
/***
 * @name validateCheckboxRequired
 * @description Funcion que se encarga de validar que dentro de un grupo de checkbox exista al menos un input en checked
 * de lo contrario marca todos los input checkbox de ese grupo en rojo y con el atributo requerido
 */
function validateCheckboxRequired(idGroupCheckbox) {
    const groupCheckbox = document.querySelector("#" + idGroupCheckbox);
    if (groupCheckbox === null)
        return;
    if (groupCheckbox.querySelectorAll('input[type="checkbox"]:checked').length > 0) {
        groupCheckbox
            .querySelectorAll('input[type="checkbox"]:required')
            .forEach((element) => {
            element.removeAttribute("required");
        });
    }
    else {
        groupCheckbox
            .querySelectorAll('input[type="checkbox"]')
            .forEach((element) => {
            element.required = true;
            element.addEventListener("click", () => {
                validateCheckboxRequired(idGroupCheckbox);
            });
        });
    }
}

"use strict";
class FilterComponent {
    constructor(settings) {
        this.searchOptionsArray = [];
        this.searchTagsArray = [];
        this.groupTagsHtml = [];
        this.groupSearchOptionsHtml = [];
        this.callBackSearch = (any) => { console.log(any); };
        this.init = () => {
            this._cleanComponent();
            this._build();
        };
        this._build = () => {
            var _a;
            let plugin = this;
            this.mainContainer = document.getElementById(this.elementID);
            let filterDiv = document.createElement("div");
            filterDiv.className = "d-flex a-items-center j-content-end p-bottom-s b-bottom";
            let span = document.createElement("span");
            span.className = "icons filter-filled-before icons-xs c-interaction-low d-flex p-right-s";
            span.addEventListener("click", function () { var _a; (_a = plugin.modal) === null || _a === void 0 ? void 0 : _a.openModalBox(); });
            let label = document.createElement("label");
            label.id = `${this.elementID}Label`;
            label.className = "typography-label c-interaction-low";
            label.innerHTML = this.filterTitle;
            label.addEventListener("click", function () { var _a; (_a = plugin.modal) === null || _a === void 0 ? void 0 : _a.openModalBox(); });
            let TagsTitleDiv = document.createElement("div");
            TagsTitleDiv.id = `${this.elementID}TagsTitle`;
            TagsTitleDiv.className = "p-y-s d-none";
            let h5 = document.createElement("h5");
            h5.className = "typography-h5";
            h5.innerHTML = this.groupTagsText;
            let containerOptions = document.createElement("div");
            containerOptions.id = `${this.elementID}ContainerOptions`;
            filterDiv.append(span, label);
            TagsTitleDiv.append(h5);
            (_a = this.mainContainer) === null || _a === void 0 ? void 0 : _a.append(filterDiv, TagsTitleDiv, containerOptions);
            this._buildModal();
        };
        this._buildModal = () => {
            this.modal = new modalBLUE({
                idModal: `${this.elementID}Modal`,
                elementReference: "modal",
                contentHTML: this._createModalHTML(),
                container: document.body,
                closeButtom: true,
                boxContentClass: this.modalContentClass
            });
        };
        this._createModalHTML = () => {
            let gridContainer = document.createElement("div");
            gridContainer.className = "grid-container";
            let gridRow = document.createElement("div");
            gridRow.className = "grid-row p-bottom-l";
            let colDiv = document.createElement("div");
            colDiv.className = "col-12 p-top-m";
            let p = document.createElement("p");
            p.className = "typography-p";
            p.innerHTML = this.modalTitle;
            let col2Div = document.createElement("div");
            col2Div.className = "col-12 p-top-l";
            let col3Div = document.createElement("div");
            col3Div.className = "col-12 p-top-l";
            colDiv.appendChild(p);
            this._createGroupSearchOptions(col2Div);
            col3Div.appendChild(this._createModalButton());
            gridRow.append(colDiv, col2Div, col3Div);
            gridContainer.appendChild(gridRow);
            return gridContainer;
        };
        this._createGroupSearchOptions = (container) => {
            let plugin = this;
            this.searchOptions.forEach(function (tempObject) {
                let params = {
                    optionID: BLUEUtils.makeRandomId(9),
                    defaultTagColor: "bg-color-neutral-medium",
                    defaultButtonColor: "bg-color-neutral",
                    defaultButtonIcon: "plus-sign-block-before",
                    searchOption: tempObject.searchOption,
                    tagColor: tempObject.tagColor,
                    buttonColor: tempObject.buttonColor,
                };
                let searchOptionDiv = plugin._createOption(params);
                plugin.groupSearchOptionsHtml.push(searchOptionDiv);
                container.appendChild(searchOptionDiv);
                searchOptionDiv.addEventListener("click", function () {
                    plugin._toggleSearchOptions(params);
                });
            });
            return container;
        };
        this._createOption = (params) => {
            let searchOption = document.createElement("div");
            searchOption.id = params.optionID;
            searchOption.className = `status-tag ${params.defaultTagColor} status-tag m-right-s p-left-s p-right-xs m-bottom-s`;
            let h5 = document.createElement("h5");
            h5.className = "status-tag_text c-white";
            h5.innerHTML = params.searchOption;
            let button = document.createElement("button");
            button.className = `btn-action btn-action__xs ${params.defaultButtonColor} d-flex b-none m-left-xs`;
            let i = document.createElement("i");
            i.className = `btn-action__icon icons ${params.defaultButtonIcon} c-white`;
            button.append(i);
            searchOption.append(h5, button);
            return searchOption;
        };
        this._toggleSearchOptions = (params) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
            let plugin = this;
            if ((_a = document.getElementById(params.optionID)) === null || _a === void 0 ? void 0 : _a.classList.contains(params.tagColor)) {
                (_b = document.getElementById(params.optionID)) === null || _b === void 0 ? void 0 : _b.classList.remove(params.tagColor, "plus-sign-block-before");
                (_d = (_c = document.getElementById(params.optionID)) === null || _c === void 0 ? void 0 : _c.lastElementChild) === null || _d === void 0 ? void 0 : _d.classList.remove(params.buttonColor);
                (_g = (_f = (_e = document.getElementById(params.optionID)) === null || _e === void 0 ? void 0 : _e.lastElementChild) === null || _f === void 0 ? void 0 : _f.lastElementChild) === null || _g === void 0 ? void 0 : _g.classList.remove("x-block-before");
                (_h = document.getElementById(params.optionID)) === null || _h === void 0 ? void 0 : _h.classList.add("bg-color-neutral-medium");
                (_k = (_j = document.getElementById(params.optionID)) === null || _j === void 0 ? void 0 : _j.lastElementChild) === null || _k === void 0 ? void 0 : _k.classList.add("bg-color-neutral");
                (_o = (_m = (_l = document.getElementById(params.optionID)) === null || _l === void 0 ? void 0 : _l.lastElementChild) === null || _m === void 0 ? void 0 : _m.lastElementChild) === null || _o === void 0 ? void 0 : _o.classList.add("plus-sign-block-before");
                this.searchOptionsArray.forEach(function (tempArray, index) {
                    if (tempArray.includes(params.searchOption)) {
                        plugin.searchOptionsArray.splice(index, 1);
                        plugin.searchTagsArray.splice(index, 1);
                    }
                    ;
                });
            }
            else {
                (_p = document.getElementById(params.optionID)) === null || _p === void 0 ? void 0 : _p.classList.remove("bg-color-neutral-medium");
                (_r = (_q = document.getElementById(params.optionID)) === null || _q === void 0 ? void 0 : _q.lastElementChild) === null || _r === void 0 ? void 0 : _r.classList.remove("bg-color-neutral");
                (_u = (_t = (_s = document.getElementById(params.optionID)) === null || _s === void 0 ? void 0 : _s.lastElementChild) === null || _t === void 0 ? void 0 : _t.lastElementChild) === null || _u === void 0 ? void 0 : _u.classList.remove("plus-sign-block-before");
                (_v = document.getElementById(params.optionID)) === null || _v === void 0 ? void 0 : _v.classList.add(params.tagColor);
                (_x = (_w = document.getElementById(params.optionID)) === null || _w === void 0 ? void 0 : _w.lastElementChild) === null || _x === void 0 ? void 0 : _x.classList.add(params.buttonColor);
                (_0 = (_z = (_y = document.getElementById(params.optionID)) === null || _y === void 0 ? void 0 : _y.lastElementChild) === null || _z === void 0 ? void 0 : _z.lastElementChild) === null || _0 === void 0 ? void 0 : _0.classList.add("x-block-before");
                if (!this.searchOptionsArray.includes(params.searchOption)) {
                    plugin.searchOptionsArray.push(params.searchOption);
                }
                ;
            }
        };
        this._createModalButton = () => {
            let result = document.createElement("button");
            result.className = "btn btn-primary";
            result.innerHTML = this.modalButtonText;
            result.addEventListener("click", this._optionsFilter);
            return result;
        };
        this._optionsFilter = () => {
            var _a;
            let plugin = this;
            this.searchTagsArray = [];
            this.groupTagsHtml = [];
            let filterResult = BLUEUtils.dataFilterForArray(this.searchOptionsArray, this.dataSearch, this.dataKey);
            this._createTagsGroup(document.getElementById(`${this.elementID}ContainerOptions`));
            this.searchOptionsArray.forEach(function (tempArray) {
                plugin.searchTagsArray.push(tempArray);
            });
            this.callBackSearch(filterResult);
            (_a = this.modal) === null || _a === void 0 ? void 0 : _a.closeModalBox();
        };
        this._createTagsGroup = (mainContainer) => {
            let plugin = this;
            let counter = 0;
            mainContainer.innerHTML = '';
            this.searchOptionsArray.forEach(function (tempArray) {
                plugin.searchOptions.forEach(function (tempObject) {
                    if (tempArray === tempObject.searchOption) {
                        counter++;
                        let params = {
                            optionID: BLUEUtils.makeRandomId(9),
                            defaultTagColor: tempObject.tagColor,
                            defaultButtonColor: tempObject.buttonColor,
                            defaultButtonIcon: "x-block-before",
                            searchOption: tempObject.searchOption,
                            counter: counter,
                            mainContainer: mainContainer
                        };
                        let tagDiv = plugin._createOption(params);
                        plugin._appendTagsPosition(params, tagDiv);
                        tagDiv.addEventListener("click", function () {
                            plugin._removeTag(tagDiv);
                        });
                    }
                });
            });
            this._showGroupTagsTitleContainer();
        };
        this._appendTagsPosition = (params, tagDiv) => {
            params.mainContainer.appendChild(tagDiv);
            tagDiv.setAttribute("style", "transition: all 0.8s;");
            this.groupTagsHtml.push(tagDiv);
            if (params.counter == this.searchOptionsArray.length && params.counter > 5) {
                params.mainContainer.appendChild(tagDiv);
                this._createTagSeeMore(params.mainContainer);
                document.getElementById(this.groupTagsHtml[5].id).insertAdjacentElement("beforebegin", this.tagSeeMore);
                for (let i = 5; i < this.groupTagsHtml.length; i++) {
                    document.getElementById(this.groupTagsHtml[i].id).classList.add("o-0");
                }
            }
        };
        this._createTagSeeMore = (container) => {
            let plugin = this;
            let params = {
                optionID: BLUEUtils.makeRandomId(9),
                defaultTagColor: "bg-color-neutral-medium",
                defaultButtonColor: "bg-color-neutral",
                defaultButtonIcon: "chevron-down-block-before",
                searchOption: this.seeMoreText
            };
            this.tagSeeMore = plugin._createOption(params);
            container.appendChild(this.tagSeeMore);
            this.tagSeeMore.setAttribute("style", "transition: all 0.8s;");
            this.tagSeeMore.classList.add("o-100");
            this.tagSeeMore.addEventListener("click", function () {
                plugin._toggleTagSeeMore(container);
            });
        };
        this._toggleTagSeeMore = (container) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if ((_c = (_b = (_a = this.tagSeeMore) === null || _a === void 0 ? void 0 : _a.lastElementChild) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.classList.contains("chevron-down-block-before")) {
                for (let i = 5; i < this.groupTagsHtml.length; i++) {
                    document.getElementById(this.groupTagsHtml[i].id).classList.remove("o-0");
                }
                container.appendChild(this.tagSeeMore);
                this.tagSeeMore.firstElementChild.innerHTML = this.seeLessText;
                (_e = (_d = this.tagSeeMore.lastElementChild) === null || _d === void 0 ? void 0 : _d.lastElementChild) === null || _e === void 0 ? void 0 : _e.classList.remove("chevron-down-block-before");
                (_g = (_f = this.tagSeeMore.lastElementChild) === null || _f === void 0 ? void 0 : _f.lastElementChild) === null || _g === void 0 ? void 0 : _g.classList.add("chevron-up-block-before");
            }
            else {
                for (let i = 5; i < this.groupTagsHtml.length; i++) {
                    document.getElementById(this.groupTagsHtml[i].id).classList.add("o-0");
                }
                (_h = this.tagSeeMore) === null || _h === void 0 ? void 0 : _h.classList.remove("o-100");
                (_j = this.tagSeeMore) === null || _j === void 0 ? void 0 : _j.classList.add("o-0");
                setTimeout(() => {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    (_a = this.tagSeeMore) === null || _a === void 0 ? void 0 : _a.classList.remove("o-0");
                    (_b = this.tagSeeMore) === null || _b === void 0 ? void 0 : _b.classList.add("o-100");
                    this.tagSeeMore.firstElementChild.innerHTML = this.seeMoreText;
                    (_e = (_d = (_c = this.tagSeeMore) === null || _c === void 0 ? void 0 : _c.lastElementChild) === null || _d === void 0 ? void 0 : _d.lastElementChild) === null || _e === void 0 ? void 0 : _e.classList.remove("chevron-up-block-before");
                    (_h = (_g = (_f = this.tagSeeMore) === null || _f === void 0 ? void 0 : _f.lastElementChild) === null || _g === void 0 ? void 0 : _g.lastElementChild) === null || _h === void 0 ? void 0 : _h.classList.add("chevron-down-block-before");
                    document.getElementById(this.groupTagsHtml[5].id).insertAdjacentElement("beforebegin", this.tagSeeMore);
                }, 490);
            }
        };
        this._removeTag = (tagDiv) => {
            var _a, _b, _c, _d, _e, _f;
            let plugin = this;
            let searchText = (_a = tagDiv.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent;
            tagDiv.remove();
            this._tagsFilter(searchText);
            if (this.searchTagsArray.length >= 5) {
                (_c = (_b = this.tagSeeMore) === null || _b === void 0 ? void 0 : _b.nextElementSibling) === null || _c === void 0 ? void 0 : _c.classList.remove("o-0");
                (_e = (_d = this.tagSeeMore) === null || _d === void 0 ? void 0 : _d.nextElementSibling) === null || _e === void 0 ? void 0 : _e.insertAdjacentElement("afterend", this.tagSeeMore);
                if (this.searchTagsArray.length == 5) {
                    (_f = this.tagSeeMore) === null || _f === void 0 ? void 0 : _f.remove();
                }
            }
            this.groupTagsHtml.forEach(function (tempArray, index) {
                if (tempArray == tagDiv) {
                    plugin.groupTagsHtml.splice(index, 1);
                }
                ;
            });
            this._hiddenGroupTagsTitleContainer();
            this._updateSearchOptions(tagDiv);
        };
        this._tagsFilter = (searchText) => {
            let plugin = this;
            this.searchTagsArray.forEach(function (tempArray, index) {
                if (tempArray === searchText) {
                    plugin.searchTagsArray.splice(index, 1);
                }
                ;
            });
            let filterResult = BLUEUtils.dataFilterForArray(this.searchTagsArray, this.dataSearch, this.dataKey);
            this.callBackSearch(filterResult);
        };
        this._updateSearchOptions = (tagDiv) => {
            var _a;
            let plugin = this;
            let searchText = (_a = tagDiv.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent;
            this.searchOptionsArray.forEach(function (tempArray, index) {
                if (tempArray == searchText) {
                    plugin.searchOptionsArray.splice(index, 1);
                }
                ;
            });
            this.groupSearchOptionsHtml.forEach(function (tempArray) {
                var _a;
                if (((_a = tempArray.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent) == searchText) {
                    tempArray.className = "status-tag bg-color-neutral-medium status-tag m-right-s p-left-s p-right-xs m-bottom-s";
                    tempArray.lastElementChild.className = "btn-action btn-action__xs bg-color-neutral d-flex b-none m-left-xs";
                    tempArray.lastElementChild.lastElementChild.className = "btn-action__icon icons plus-sign-block-before c-white";
                }
                ;
            });
        };
        this._showGroupTagsTitleContainer = () => {
            var _a, _b;
            this.searchOptionsArray.length ? (_a = document.getElementById(`${this.elementID}TagsTitle`)) === null || _a === void 0 ? void 0 : _a.classList.remove("d-none") : (_b = document.getElementById(`${this.elementID}TagsTitle`)) === null || _b === void 0 ? void 0 : _b.classList.add("d-none");
        };
        this._hiddenGroupTagsTitleContainer = () => {
            var _a, _b;
            this.groupTagsHtml.length == 0 ? (_a = document.getElementById(`${this.elementID}TagsTitle`)) === null || _a === void 0 ? void 0 : _a.classList.add("d-none") : (_b = document.getElementById(`${this.elementID}TagsTitle`)) === null || _b === void 0 ? void 0 : _b.classList.remove("d-none");
        };
        this._cleanComponent = () => {
            let containerPlugin = document.getElementById(this.elementID);
            if (containerPlugin !== null && containerPlugin !== undefined) {
                containerPlugin.innerHTML = "";
            }
        };
        this.elementID = settings.elementID;
        this.filterTitle = settings.filterTitle;
        this.searchOptions = settings.searchOptions;
        this.modalTitle = settings.modalTitle;
        this.modalButtonText = settings.modalButtonText;
        this.modalContentClass = settings.modalContentClass;
        this.groupTagsText = settings.groupTagsText;
        this.seeMoreText = settings.seeMoreText;
        this.seeLessText = settings.seeLessText;
        this.dataKey = settings.dataKey;
        this.dataSearch = settings.dataSearch;
        if (settings === null || settings === void 0 ? void 0 : settings.callBackSearch)
            this.callBackSearch = settings === null || settings === void 0 ? void 0 : settings.callBackSearch;
        this.init();
    }
}

"use strict";
// REVISION ------ 1.0
// DATE: --------- 03-10-2022
// DESCRIPTION: -- Define y contruye los elementos para el filter
// AUTHOR: ------- rvargas
// WORKTEAM: ----- Onix
// version 1.0
class Filter {
    constructor(options) {
        this.options = options;
        this.optionsFilters = [];
        this.callbackFilter = (any) => { console.log(any); };
        this.updateDataFilter = (dataUpdate) => {
            this.data = dataUpdate;
        };
        this.data = options.data;
        this.optionsFilters = options.optionsFilters;
        if (options.callbackFilter) {
            this.callbackFilter = options.callbackFilter;
        }
    }
    filterFunction(IdFilter, predicate) {
        let FilterActual = this.optionsFilters.findIndex((obj => obj.idFilter == IdFilter));
        this.optionsFilters[FilterActual].predicate = predicate;
        let datareturn = [...this.data];
        for (let i in this.optionsFilters) {
            if (this.optionsFilters[i].predicate != null || this.optionsFilters[i].predicate != undefined) {
                if (this.optionsFilters[i].type == "search") {
                    datareturn = this.filterIncludes(datareturn, this.optionsFilters[i].predicate, this.optionsFilters[i].key);
                }
                else {
                    datareturn = this.filterByPredicate(datareturn, this.optionsFilters[i].predicate);
                }
            }
        }
        this.callbackFilter(datareturn);
        return datareturn;
    }
    filterByPredicate(datareturn, predicate) {
        if (predicate != "") {
            try {
                let dataresult = datareturn.filter(predicate);
                if (dataresult.length >= 0) {
                    datareturn = dataresult;
                }
            }
            catch (error) {
                console.error("El predicado no se puede buscar porque no es una funcion o metodo valido");
            }
        }
        return datareturn;
    }
    filterIncludes(data, value, key) {
        if (value != "") {
            if (key != null) {
                return BLUEUtils.dataFilter(value, data, key);
            }
            else {
                return this.filterAllProperties(value, data);
            }
        }
        else {
            return data;
        }
    }
    filterAllProperties(valueSearch, data) {
        if (valueSearch && valueSearch != '') {
            let dataAct = data.filter(function (itemData) {
                let result = false;
                for (let prop in itemData) {
                    result = ('' + itemData[prop]).includes(valueSearch);
                    if (result) {
                        return true;
                    }
                }
                return result;
            });
            return dataAct;
        }
    }
}

"use strict";
class InputCode {
    constructor(querySelector, callback, groupsOfInputs, inputByGroup) {
        this.querySelector = querySelector;
        this.rootElement = document.querySelector(querySelector);
        this.groupsOfInputs = groupsOfInputs ? groupsOfInputs : 1;
        this.inputByGroup = inputByGroup ? inputByGroup : 3;
        this.callback = callback;
        this.show();
    }
    show() {
        var _a, _b;
        this.rootElement.classList.add('d-flex', 'j-content-center');
        let resultMonitor = document.createElement('div');
        resultMonitor.classList.add('col-1', 'm-top-m', 'd-flex', 'j-content-center');
        let indexInput = 0;
        for (let i = 0; i < this.groupsOfInputs; i++) {
            for (let j = 0; j < this.inputByGroup; j++) {
                let inputCode = document.createElement('input');
                inputCode.classList.add('input-main', 'typography-p', 'f-grow-1', 't-align-center');
                inputCode.setAttribute('id', `${i}${j}`);
                inputCode.setAttribute('type', 'tel');
                inputCode.setAttribute('maxlength', '1');
                inputCode.dataset.index = indexInput.toString();
                inputCode.addEventListener("keyup", (e) => { this.handleInput(e); });
                inputCode.addEventListener("paste", (e) => { this.handleOnPasteOtp(e); });
                if (j == this.inputByGroup - 1 && i != this.groupsOfInputs - 1) {
                    inputCode.classList.add('m-right-s');
                }
                this.rootElement.appendChild(inputCode);
                indexInput++;
            }
        }
        var inputs = document.querySelectorAll(this.querySelector + ' input');
        inputs.forEach((input, index) => {
            if (index == 0) {
                input.focus();
            }
        });
        resultMonitor.innerHTML = `<div id="loadingContainer" class="d-flex a-items-center d-none"><svg class="lds-spinner" width="34px"  height="34px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">  <rect class="rect1" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb" >      </rect></g><g transform="rotate(30 50 50)">  <rect class="rect2" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb">    </rect></g><g transform="rotate(60 50 50)">  <rect class="rect3" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb">     </rect></g><g transform="rotate(90 50 50)">  <rect class="rect4" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb">     </rect></g><g transform="rotate(120 50 50)">  <rect class="rect5" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb">    </rect></g><g transform="rotate(150 50 50)">  <rect class="rect6" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb">    </rect></g><g transform="rotate(180 50 50)">  <rect class="rect7" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb">      </rect></g><g transform="rotate(210 50 50)">  <rect class="rect8" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb">      </rect></g><g transform="rotate(240 50 50)">  <rect class="rect9" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb">      </rect></g><g transform="rotate(270 50 50)">  <rect class="rect10" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb">  </rect></g><g transform="rotate(300 50 50)">  <rect class="rect11" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb">      </rect></g><g transform="rotate(330 50 50)">  <rect class="rect12" x="47" y="24" rx="9.4" ry="1" width="6" height="12" fill="#1075bb">   </rect></g><style>@keyframes loading-spinner { 0% {   		opacity: 1;	}100% {   		opacity: 0; 	} }  .rect1 {	animation: loading-spinner 1s linear infinite; 	animation-delay: -0.9166666666666666s; } .rect2 {	animation: loading-spinner 1s linear infinite;	animation-delay: -0.8333333333333334s; }  .rect3 {	animation: loading-spinner 1s linear infinite;	animation-delay: -0.75s; }  .rect4 {	animation: loading-spinner 1s linear infinite;	animation-delay: -0.6666666666666666s; }  .rect5 {	animation: loading-spinner 1s linear infinite;	animation-delay: -0.5833333333333334s; }  .rect6 {	animation: loading-spinner 1s linear infinite;	animation-delay: -0.5s; }  .rect7 {	animation: loading-spinner 1s linear infinite;	animation-delay: -0.4166666666666667s; }  .rect8 {	animation: loading-spinner 1s linear infinite;	animation-delay: -0.3333333333333333s; }  .rect9 {	animation: loading-spinner 1s linear infinite;	animation-delay: -0.25s; }  .rect10 {	animation: loading-spinner 1s linear infinite;	animation-delay: -0.16666666666666666s; }  .rect11 {	animation: loading-spinner 1s linear infinite;	animation-delay: -0.08333333333333333s; }  .rect12 {	animation: loading-spinner 1s linear infinite;	animation-delay: 0s; }</style></svg></div>
                                    <div id="successContainer" class="d-flex a-items-center d-none"><i class="icons check-block-before c-positive-low icons-3xl"></i></div>`;
        (_a = this.rootElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(resultMonitor, this.rootElement.nextSibling);
        let inputErrorMessage = document.createElement('div');
        inputErrorMessage.classList.add('col-12', 'm-top-m', 'p-x-l');
        inputErrorMessage.innerHTML = ` <h5 class="typography-h5 c-brand-low t-align-center d-none" id="invalidCodeError"></h5>`;
        (_b = this.rootElement.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(inputErrorMessage, resultMonitor.nextSibling);
    }
    clean() {
        var _a, _b, _c;
        let inputs = this.rootElement.querySelectorAll('input');
        inputs.forEach((input, index) => {
            input.value = '';
            if (index == 0) {
                input.focus();
            }
        });
        (_a = document.querySelector("#successContainer")) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
        (_b = document.querySelector("#loadingContainer")) === null || _b === void 0 ? void 0 : _b.classList.add("d-none");
        (_c = document.querySelector("#invalidCodeError")) === null || _c === void 0 ? void 0 : _c.classList.add("d-none");
    }
    disabled() {
        let inputs = this.rootElement.querySelectorAll('input');
        inputs.forEach((input) => {
            input.setAttribute("disabled", "disabled");
            input.classList.add("bg-color-background");
        });
    }
    enable() {
        let inputs = this.rootElement.querySelectorAll('input');
        inputs.forEach((input) => {
            input.removeAttribute("disabled");
            input.classList.remove("bg-color-background");
        });
    }
    val() {
        let result = '';
        let inputs = this.rootElement.querySelectorAll('input');
        inputs.forEach((input) => {
            result += input.value;
        });
        return result;
    }
    showError(message) {
        var _a, _b;
        (_a = document.querySelector("#loadingContainer")) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
        this.clean();
        this.enable();
        let errorContainer = document.querySelector("#invalidCodeError");
        if (errorContainer) {
            errorContainer.innerHTML = message;
        }
        let inputs = this.rootElement.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].classList.add('b-bottom-color-error-low');
        }
        (_b = document.querySelector("#invalidCodeError")) === null || _b === void 0 ? void 0 : _b.classList.remove("d-none");
    }
    removeError() {
        var _a, _b;
        if (!((_a = document.querySelector("#invalidCodeError")) === null || _a === void 0 ? void 0 : _a.classList.contains("d-none"))) {
            let inputs = this.rootElement.querySelectorAll('input');
            inputs.forEach((input) => {
                input.classList.remove('b-bottom-color-error-low');
            });
            (_b = document.querySelector("#invalidCodeError")) === null || _b === void 0 ? void 0 : _b.classList.add("d-none");
        }
    }
    markAsSuccess() {
        var _a, _b;
        (_a = document.querySelector("#loadingContainer")) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
        (_b = document.querySelector("#successContainer")) === null || _b === void 0 ? void 0 : _b.classList.remove("d-none");
        this.disabled();
    }
    handleInput(e) {
        var _a;
        this.removeError();
        var inputs = document.querySelectorAll(`${this.querySelector} input`);
        const input = e.target;
        let value = input.value;
        let isValidInput = value.match(/[0-9]/gi);
        input.value = "";
        input.value = isValidInput ? value[0] : "";
        let fieldIndex = input.dataset.index;
        if (fieldIndex < inputs.length - 1 && isValidInput) {
            input.nextElementSibling.focus();
        }
        if (e.key === "Backspace" && fieldIndex > 0) {
            input.previousElementSibling.focus();
        }
        if (fieldIndex == inputs.length - 1 && isValidInput) {
            (_a = document.querySelector("#loadingContainer")) === null || _a === void 0 ? void 0 : _a.classList.remove("d-none");
            input.blur();
            this.callback();
        }
    }
    handleOnPasteOtp(e) {
        var _a;
        this.removeError();
        const data = e.clipboardData.getData("text");
        const value = data.split("");
        var inputs = document.querySelectorAll(`${this.querySelector} input`);
        if (value.length === inputs.length) {
            inputs.forEach((input, index) => {
                input.value = value[index];
                input.blur();
            });
            (_a = document.querySelector("#loadingContainer")) === null || _a === void 0 ? void 0 : _a.classList.remove("d-none");
            this.callback();
        }
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define funcionalidad de los inputs
// AUTHOR: ------- SContreras
// WORKTEAM: ----- Onix
// version 1.0
function loadBLUE() {
    inputPassword();
}
/***
 * @name inputPassword
 * @description funcion para el input de mostrar y ocultar contraseña
 */
//
function inputPassword() {
    document.querySelectorAll(".input-password").forEach((element) => {
        const spanTag = element.querySelector("button");
        if (spanTag === null)
            return;
        const spanTagDefaultTextContent = spanTag.textContent;
        if (spanTagDefaultTextContent === null)
            return;
        const spanTagHiddenMessage = spanTag.getAttribute("data-hidden-message");
        const inputTag = element.querySelector("input");
        if (inputTag === null)
            return;
        spanTag.addEventListener("click", () => {
            const passwordInputType = inputTag.getAttribute("type");
            inputTag.focus();
            if (passwordInputType && /password/i.test(passwordInputType)) {
                inputTag.setAttribute("type", "text");
                spanTag.textContent = spanTagHiddenMessage;
            }
            else {
                inputTag.setAttribute("type", "password");
                spanTag.textContent = spanTagDefaultTextContent;
            }
        });
        inputTag.addEventListener("keyup", ({ target }) => {
            const { value } = target;
            if (value)
                spanTag.style.visibility = "visible";
            else
                spanTag.style.visibility = "hidden";
        });
    });
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define los elementos y funcionalidad del componente de carga
// AUTHOR: ------- ECalderon, WElizondo
// WORKTEAM: ----- Onix
// version 1.0
var LoaderSvgPath;
(function (LoaderSvgPath) {
    LoaderSvgPath["LOADER_SVG"] = "<svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 260 260\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <filter id=\"dropshadow\" width=\"83%\" height=\"83%\" filterUnits=\"userSpaceOnUse\">\n                        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\"/>\n                        <feOffset dx=\"0\" dy=\"0\"/>\n                        <feMerge>\n                            <feMergeNode/>\n                            <feMergeNode in=\"SourceGraphic\"/>\n                        </feMerge>\n                    </filter>\n                    <circle cx=\"130\" cy=\"130\" r=\"56\"  stroke-width=\"2\"/>\n                    <circle cx=\"130\" cy=\"130\" r=\"56\"  stroke-width=\"2\"/>\n                    <circle cx=\"130\" cy=\"130\" r=\"56\"  stroke-width=\"2\"/>\n                    <circle cx=\"130\" cy=\"130\" r=\"56\" stroke-width=\"2\"/>\n                    <circle cx=\"130\" cy=\"130\" r=\"62.5\" class=\"waiting__loading-stroke\"/>\n                    <circle cx=\"130\" cy=\"130\" r=\"56\"  class=\"waiting__loading-radial\" stroke-width=\"2\"/>\n                    <circle class=\"waiting__center-init waiting__center\" cx=\"130\" cy=\"130\" r=\"41\" fill=\"transparent\"/>\n                    <text fill=\"#ffffff\" alignment-baseline=\"middle\" text-anchor=\"middle\" style=\"font-size: 28px; font-family: Graphik; white-space: pre;\"/>\n                    <path fill=\"transparent\"/>\n                    <path class=\"waiting__icon-success\" stroke=\"white\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n                    <path class=\"waiting__icon-error_line1\" stroke=\"white\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n                    <path class=\"waiting__icon-error_line2\" stroke=\"white\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n                    <path stroke=\"transparent\" fill=\"transparent\"/>\n                </svg>";
})(LoaderSvgPath || (LoaderSvgPath = {}));
var LoadingIconPath;
(function (LoadingIconPath) {
    LoadingIconPath["DEFAULT_INIT_ICON"] = "M 140.394 102.5 L 119.605 102.5 C 117.719 102.493 115.907 103.225 114.573 104.534 C 113.239 105.843 112.493 107.621 112.5 109.472 L 112.5 150.528 C 112.493 152.379 113.239 154.157 114.573 155.466 C 115.907 156.774 117.719 157.507 119.605 157.5 L 140.394 157.5 C 142.281 157.507 144.092 156.774 145.426 155.466 C 146.76 154.157 147.507 152.379 147.5 150.528 L 147.5 109.73 C 147.53 105.825 144.373 102.612 140.394 102.5 Z M 144.868 148.721 L 144.868 150.528 C 144.826 151.683 144.358 152.784 143.552 153.627 C 142.722 154.46 141.582 154.927 140.394 154.918 L 119.605 154.918 C 117.164 154.85 115.2 152.924 115.132 150.528 L 115.132 148.721 L 144.868 148.721 Z M 144.868 146.138 L 115.132 146.138 L 115.132 113.862 L 144.868 113.862 L 144.868 146.138 Z M 144.868 109.73 L 144.868 111.538 L 115.132 111.538 L 115.132 109.73 C 115.2 107.334 117.164 105.408 119.605 105.34 L 140.394 105.34 C 141.583 105.333 142.725 105.794 143.566 106.618 C 144.406 107.443 144.875 108.564 144.868 109.73 Z";
    LoadingIconPath["DEFAULT_SUCCESS_ICON"] = "M 117.036 129.185 L 126.965 138.5 L 142.965 121.5";
    LoadingIconPath["DEFAULT_ERROR_ICON"] = "M 119.039 140.968 L 140.961 119.032";
    LoadingIconPath["DEFAULT_ERROR_ICON_2"] = "M 140.961 140.968 L 119.039 119.032";
    LoadingIconPath["DEFAULT_ATTENTION_ICON"] = "M 132.4 140.774 L 132.4 146 L 127.6 146 L 127.6 140.774 L 132.4 140.774 Z M 126.444 114 L 133.556 114 L 132.134 136.968 L 127.868 136.968 L 126.446 114 L 126.444 114 Z";
})(LoadingIconPath || (LoadingIconPath = {}));
class LoaderComponent {
    constructor(options) {
        this.circumferenceStroke = 400;
        this.circumferenceRadial = 1080;
        this.timeToStop = 2;
        this.counterForIter = 0;
        this.status = "";
        this.iconSuccessPath = LoadingIconPath.DEFAULT_SUCCESS_ICON;
        this.iconErrorPath = LoadingIconPath.DEFAULT_ERROR_ICON;
        this.iconError2Path = LoadingIconPath.DEFAULT_ERROR_ICON_2;
        this._build = () => {
            var _a;
            const divTemp = document.createElement('div');
            divTemp.innerHTML = LoaderSvgPath.LOADER_SVG;
            if (!(divTemp.firstElementChild instanceof SVGSVGElement)) {
                throw new Error(`Expected e to be an SVGSVGElement, was ${(_a = this.settings.animationSVG.firstElementChild) === null || _a === void 0 ? void 0 : _a.className}`);
            }
            this.settings.animationSVG = divTemp.firstElementChild;
            this.settings.animationSVG.setAttribute("id", this.settings.animationContainerID + "SVG");
            this._setPositionContainer();
            this._setElementColors();
            this._setElementAnimation();
            this._setSvgPathElements();
            this.animation.animationContainer.append(this.settings.animationSVG);
        };
        /**
         * @name _setPositionContainer
         * @description se encarga de setear la posicion del contenedor principal
         */
        this._setPositionContainer = () => {
            this.animation.animationContainer.style.setProperty("height", this.settings.height);
            this.animation.animationContainer.style.setProperty("width", this.settings.width);
            this.animation.animationContainer.style.setProperty("position", this.settings.position);
            this.animation.animationContainer.style.setProperty("z-index", this.settings.zIndex);
        };
        /**
         * @name setElementAnimation
         * @description se encarga de setear los elementos relacionados al color
         */
        this._setElementColors = () => {
            this.settings.animationSVG.style.setProperty("--init-color", "var(" + this.settings.initColor + ")");
            this.settings.animationSVG.style.setProperty("--main-color", "var(" + this.settings.successColor + ")");
            this.settings.animationSVG.style.setProperty("--secondary-color", "var(" + this.settings.errorColor + ")");
            this.settings.animationSVG.style.setProperty("--generic-color", "var(" + this.settings.genericColor + ")");
            this.settings.animationSVG.style.setProperty("--init-color-icon", "var(" + this.settings.initColorIcon + ")");
        };
        /**
         * @name setElementAnimation
         * @description se encarga de setear los elementos de la animación
         */
        this._setElementAnimation = () => {
            this.settings.animationSVG.style.setProperty("--waiting-dashoffset-stroke", this.circumferenceStroke + '');
            this.settings.animationSVG.style.setProperty("--waiting-dashoffset-radial", this.circumferenceRadial + '');
            this.settings.animationSVG.style.setProperty("--wave-time", this.settings.waveTime + 's');
            this.settings.animationSVG.style.setProperty("--wave-counter", this.settings.waveFrequency);
        };
        /**
         * @name setSvgPathElements
         * @description se encarga de setear los elementos del svg
         */
        this._setSvgPathElements = () => {
            if (this.settings.initText == '') {
                this.settings.animationSVG.getElementsByTagName("path")[0].setAttribute("d", this.settings.iconInitPath);
                this.settings.animationSVG.getElementsByTagName("path")[0].classList.add("waiting__icon");
            }
            else {
                this._setInitText();
            }
            this.settings.animationSVG.getElementsByTagName("path")[1].setAttribute("d", this.iconSuccessPath);
            this.settings.animationSVG.getElementsByTagName("path")[2].setAttribute("d", this.iconErrorPath);
            this.settings.animationSVG.getElementsByTagName("path")[3].setAttribute("d", this.iconError2Path);
            this.settings.animationSVG.getElementsByTagName("path")[4].setAttribute("d", this.settings.iconGenericPath);
            this.settings.animationSVG.getElementsByTagName("circle")[4].setAttribute("id", this.settings.animationSVG.id + "LoadingStroke");
            this.settings.animationSVG.getElementsByTagName("circle")[5].setAttribute("id", this.settings.animationSVG.id + "LoadingRadial");
        };
        /**
        * @name _wavesAnimation
        * @description funcion encargada de mostrar las clases para animacion de las ondas
        */
        this._wavesAnimation = () => {
            this.settings.animationSVG.getElementsByTagName("circle")[0].classList.add("circle-waves", "waiting__circle-waves-1");
            this.settings.animationSVG.getElementsByTagName("circle")[1].classList.add("circle-waves", "waiting__circle-waves-2");
            this.settings.animationSVG.getElementsByTagName("circle")[2].classList.add("circle-waves", "waiting__circle-waves-3");
            this.settings.animationSVG.getElementsByTagName("circle")[3].classList.add("circle-waves", "waiting__circle-waves-4");
        };
        /**
         * @name _resetWavesAnimation
         * @description funcion encargada de remover las clases para animacion de las ondas
         */
        this._resetWavesAnimation = () => {
            this.settings.animationSVG.getElementsByTagName("circle")[0].classList.remove("circle-waves", "waiting__circle-waves-1");
            this.settings.animationSVG.getElementsByTagName("circle")[1].classList.remove("circle-waves", "waiting__circle-waves-2");
            this.settings.animationSVG.getElementsByTagName("circle")[2].classList.remove("circle-waves", "waiting__circle-waves-3");
            this.settings.animationSVG.getElementsByTagName("circle")[3].classList.remove("circle-waves", "waiting__circle-waves-4");
        };
        /**
         * @name _setInitText
         * @description Establece texto de inicio dentro del componente
         */
        this._setInitText = () => {
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                this.settings.animationSVG.getElementsByTagName("text")[0].setAttribute("y", "140");
            }
            else {
                this.settings.animationSVG.getElementsByTagName("text")[0].setAttribute("y", "132.827");
            }
            this.settings.animationSVG.getElementsByTagName("text")[0].setAttribute("x", "130");
            let text = this.settings.animationSVG.getElementsByTagName("text")[0];
            text.textContent = this.settings.initText;
        };
        /**
         * @name _removeInitText
         * @description Remove el texto de inicio dentro del componente
         */
        this._removeInitText = () => {
            let text = this.settings.animationSVG.getElementsByTagName("text")[0];
            text.textContent = '';
        };
        /**
         * @name startAnimation
         * @description Empieza la animacion dependiendo del parametro de executionTime
         */
        this.startAnimation = (aStatus) => {
            if (this.settings.executionTime == 0) {
                this.circleAnimationIteration = setInterval(this._circleAnimationLoop, 50); //tiempo
            }
            else {
                this.status = aStatus;
                this._circleAnimation(aStatus);
            }
        };
        /**
         * @name _circleAnimationLoop
         * @description Se utiliza cuando no se determina un tiempo de ejecucion y se encuentra a la espera de una respuesta
         */
        this._circleAnimationLoop = () => {
            var _a, _b;
            let distanceInterval = 10;
            let stop = 80;
            this.counterForIter += 1;
            this.circumferenceStroke = this.circumferenceStroke - distanceInterval;
            this.circumferenceRadial = this.circumferenceRadial - (distanceInterval - (distanceInterval * 0.10));
            (_a = document.getElementById(this.settings.animationSVG.id + "LoadingRadial")) === null || _a === void 0 ? void 0 : _a.style.setProperty("--waiting-dashoffset-radial", this.circumferenceRadial + '');
            (_b = document.getElementById(this.settings.animationSVG.id + "LoadingStroke")) === null || _b === void 0 ? void 0 : _b.style.setProperty("--waiting-dashoffset-stroke", this.circumferenceStroke + '');
            if (this.counterForIter >= stop) {
                clearInterval(this.circleAnimationIteration);
                this.circumferenceRadial = 1080;
                this.circumferenceStroke = 400;
                this.counterForIter = 0;
                this.circleAnimationIteration = setInterval(this._circleAnimationLoop, 50);
                return;
            }
        };
        /**
          * @name _circleAnimation
          * @description Se encarga de iniciar la animacion cuando se incluye el parametro executionTime
          */
        this._circleAnimation = (status) => {
            var _a, _b;
            (_a = document.getElementById(this.settings.animationSVG.id + "LoadingStroke")) === null || _a === void 0 ? void 0 : _a.style.setProperty("animation", "waiting-loading-stroke " + this.settings.executionTime + "s linear forwards");
            (_b = document.getElementById(this.settings.animationSVG.id + "LoadingRadial")) === null || _b === void 0 ? void 0 : _b.style.setProperty("animation", "waiting-loading-radial " + this.settings.executionTime + "s linear forwards");
            setTimeout(() => {
                this._wavesAnimation();
                this._removeInitText();
                this.settings.animationSVG.getElementsByTagName("circle")[6].setAttribute("style", "filter:url(#dropshadow)");
                this.settings.animationSVG.getElementsByTagName("circle")[6].classList.add("waiting__center-status");
                this.settings.animationSVG.getElementsByTagName("circle")[6].classList.remove("waiting__center-init");
                switch (status) {
                    case "success":
                        this.settings.animationSVG.classList.add("waiting__success");
                        this.settings.animationSVG.style.setProperty("--init-color", "var(" + this.settings.successColor + ")");
                        break;
                    case "error":
                        this.settings.animationSVG.classList.add("waiting__error");
                        this.settings.animationSVG.style.setProperty("--init-color", "var(" + this.settings.errorColor + ")");
                        break;
                    case "generic":
                        this.settings.animationSVG.style.setProperty("--init-color", "var(" + this.settings.genericColor + ")");
                        this.settings.animationSVG.getElementsByTagName("path")[0].classList.remove("waiting__icon");
                        this.settings.animationSVG.getElementsByTagName("path")[4].classList.add("waiting__generic");
                        break;
                }
            }, this.settings.executionTime * 1000);
        };
        /**
          * @name statusResponse
          * @description Metodo que se utiliza para mandar detener la funcion _circleAnimationLoop
          */
        this.statusResponse = (aStatus) => {
            this.status = aStatus;
            this.stopCircleAnimationIteration = setInterval(this._stopAnimation, 50);
        };
        /**
          * @name _stopAnimation
          * @description Funcion que se encarga de detener la animacion
          */
        this._stopAnimation = () => {
            if (this.circumferenceStroke == 0) {
                clearInterval(this.circleAnimationIteration);
                clearInterval(this.stopCircleAnimationIteration);
                this._wavesAnimation();
                this._removeInitText();
                this.settings.animationSVG.getElementsByTagName("circle")[6].setAttribute("style", "filter:url(#dropshadow)");
                this.settings.animationSVG.getElementsByTagName("circle")[6].classList.remove("waiting__center-init");
                this.settings.animationSVG.getElementsByTagName("circle")[6].classList.add("waiting__center-status");
                switch (this.status) {
                    case "success":
                        this.settings.animationSVG.style.setProperty("--init-color", "var(" + this.settings.successColor + ")");
                        this.settings.animationSVG.classList.add("waiting__success");
                        break;
                    case "error":
                        this.settings.animationSVG.style.setProperty("--init-color", "var(" + this.settings.errorColor + ")");
                        this.settings.animationSVG.classList.add("waiting__error");
                        break;
                    case "generic":
                        this.settings.animationSVG.style.setProperty("--init-color", "var(" + this.settings.genericColor + ")");
                        this.settings.animationSVG.getElementsByTagName("path")[4].classList.add("waiting__generic");
                        this.settings.animationSVG.getElementsByTagName("path")[0].classList.remove("waiting__icon");
                        break;
                }
            }
        };
        /**
         * @name resetAnimation
         * @description Regresa al SVG a su estado inicial
         */
        this.resetAnimation = () => {
            var _a, _b, _c, _d;
            setTimeout(() => {
                this._setInitText();
            }, 500);
            if (this.settings.executionTime != 0) {
                (_a = document.getElementById(this.settings.animationSVG.id + "LoadingStroke")) === null || _a === void 0 ? void 0 : _a.style.setProperty("animation", "");
                (_b = document.getElementById(this.settings.animationSVG.id + "LoadingRadial")) === null || _b === void 0 ? void 0 : _b.style.setProperty("animation", "");
            }
            else {
                clearInterval(this.circleAnimationIteration);
                clearInterval(this.stopCircleAnimationIteration);
                this.counterForIter = 0;
                this.circumferenceRadial = 1080;
                this.circumferenceStroke = 400;
                (_c = document.getElementById(this.settings.animationSVG.id + "LoadingRadial")) === null || _c === void 0 ? void 0 : _c.style.setProperty("--waiting-dashoffset-radial", this.circumferenceRadial + '');
                (_d = document.getElementById(this.settings.animationSVG.id + "LoadingStroke")) === null || _d === void 0 ? void 0 : _d.style.setProperty("--waiting-dashoffset-stroke", this.circumferenceStroke + '');
            }
            switch (this.status) {
                case "success":
                    this.settings.animationSVG.classList.remove("waiting__success");
                    break;
                case "error":
                    this.settings.animationSVG.classList.remove("waiting__error");
                    break;
                case "generic":
                    this.settings.animationSVG.getElementsByTagName("path")[4].classList.remove("waiting__generic");
                    this.settings.animationSVG.getElementsByTagName("path")[0].classList.add("waiting__icon");
                    break;
            }
            this._resetWavesAnimation();
            this.settings.animationSVG.getElementsByTagName("circle")[6].setAttribute("style", "");
            this.settings.animationSVG.getElementsByTagName("circle")[6].classList.add("waiting__center-init");
            this.settings.animationSVG.getElementsByTagName("circle")[6].classList.remove("waiting__center-status");
            this.settings.animationSVG.style.setProperty("--init-color", "var(" + this.settings.initColor + ")");
        };
        /**
          * @name destroy
          * @description se encarga de eliminar el plugin
          */
        this.destroy = () => {
            let containerPlugin = document.getElementById(this.settings.animationContainerID + "SVG");
            if (containerPlugin !== null && containerPlugin !== undefined) {
                containerPlugin.remove();
            }
        };
        if (options.animationContainerID === null || options.animationContainerID === undefined) {
            throw new Error(`El parametro animationContainerID es obligatorio, para crear el Loader necesita indicar cual será el elemento contenedor}`);
        }
        this.settings = Object.assign({}, {
            executionTime: 0,
            initColor: '--c-neutral-medium',
            successColor: '--c-positive-low',
            errorColor: '--c-critical-low',
            genericColor: '--c-attention-low',
            initColorIcon: '--c-white',
            waveFrequency: 'infinite',
            waveTime: 4,
            initText: '',
            height: '140px',
            width: '100%',
            position: '',
            zIndex: '',
            iconInitPath: LoadingIconPath.DEFAULT_INIT_ICON,
            iconGenericPath: LoadingIconPath.DEFAULT_ATTENTION_ICON,
        }, options);
        this.animation = { animationContainer: document.getElementById(options.animationContainerID) };
        this._build();
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- PN-0005910
// DATE: --------- 29-09-2022
// DESCRIPTION: -- Define los elementos y funcionalidad del componente loading
// AUTHOR: ------- aramirezpa
// WORKTEAM: ----- Onix
// version 1.0
class LoadingComponent {
    constructor(options) {
        this.settings = Object.assign({}, {
            fill: '--c-interaction-medium',
            height: '52px',
            width: '52px',
            loadingText: '',
            zIndex: '',
            containerId: '',
            extraClassesContainer: '',
            animationContainer: document.body,
        }, options);
        this._buildElement();
    }
    _buildElement() {
        let LoadingSvgPath;
        (function (LoadingSvgPath) {
            LoadingSvgPath["LOADING_SVG"] = "<svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"rect1 rect\" d=\"M23.1747 0.433333V8.23333V8.66667H28.8253V8.23333V0.433333V0H23.1747V0.433333Z\"/>\n    <rect class=\"rect2 rect\" x=\"32\" y=\"9\" width=\"9\" height=\"6\" transform=\"rotate(-59 32 9)\"/>\n    <rect class=\"rect3 rect\" x=\"39\" y=\"14\" width=\"9\" height=\"6\" transform=\"rotate(-30 39 14)\"/>\n    <rect class=\"rect4 rect\" x=\"43\" y=\"23\" width=\"9\" height=\"6\"/>\n    <rect class=\"rect5 rect\" x=\"39\" y=\"37\" width=\"6\" height=\"9\" transform=\"rotate(-59 39 37)\"/>\n    <rect class=\"rect6 rect\" x=\"32\" y=\"42\" width=\"6\" height=\"9\" transform=\"rotate(-30 32 42)\"/>\n    <rect class=\"rect7 rect\" x=\"23\" y=\"43\" width=\"6\" height=\"9\"/>\n    <path class=\"rect8 rect\" d=\"M14.6698 39.9742V39.9742L10.5531 47.104L15.4463 49.9293L15.663 49.5537V49.5537L19.7796 42.424L14.8864 39.5986L14.6698 39.9742Z\"/>\n    <path class=\"rect9 rect\" d=\"M9.57609 32.2202L9.20111 32.4369L9.20053 32.4363L2.07018 36.553L4.89551 41.4462L5.27049 41.2301H5.27106L12.4014 37.1134L9.57609 32.2202Z\"/>\n    <path class=\"rect10 rect\" d=\"M8.66609 28.8255V23.1748H8.23333H0.432756H0V28.8255H0.432756H8.23333H8.66609Z\"/>\n    <path class=\"rect11 rect\" d=\"M2.44573 15.6636L9.57609 19.7802L12.4014 14.887L12.0259 14.6704V14.6704L4.89551 10.5537L2.07018 15.4469L2.44573 15.6636V15.6636Z\"/>\n    <path class=\"rect12 rect\" d=\"M15.663 2.44636L15.4463 2.0708L10.5531 4.89613L14.6698 12.0265V12.0265L14.8864 12.402L19.7796 9.57671L15.663 2.44636V2.44636Z\"/>";
        })(LoadingSvgPath || (LoadingSvgPath = {}));
        //Se crea el contenedor del loading y se le da estilos
        const loadingElement = document.createElement('div');
        //Define el elemento que contendrá el loading, solo coloca overlay si irá en el document.body
        if (this.settings.containerId != '') {
            let animationContainer = document.getElementById(this.settings.containerId);
            this.settings.animationContainer = animationContainer ? animationContainer : this.settings.animationContainer;
        }
        else {
            loadingElement.classList.add("d-flex", "f-column", "a-items-center", "j-content-center", "loading-bg");
        }
        //Define un id 
        this.settings.containerId = BLUEUtils.makeRandomId(15);
        loadingElement.setAttribute("id", this.settings.containerId);
        //Define z-index
        if (this.settings.zIndex != '') {
            loadingElement.style.zIndex = this.settings.zIndex;
        }
        //Define clases extra para el contenedor
        if (this.settings.extraClassesContainer != '') {
            loadingElement.classList.add(...this.settings.extraClassesContainer);
        }
        //Define estilos para el SVG
        loadingElement.innerHTML = LoadingSvgPath.LOADING_SVG;
        loadingElement.getElementsByTagName("svg")[0].style.setProperty("height", this.settings.animationHeight);
        loadingElement.getElementsByTagName("svg")[0].style.setProperty("width", this.settings.animationWidth);
        loadingElement.getElementsByTagName("svg")[0].style.setProperty("fill", "rgb(var(" + this.settings.fill + "))");
        if (this.settings.loadingText != '') {
            loadingElement.append(this.setText(this.settings.loadingText));
        }
        //setea el loading en el contenedor default o el indicado por parametro (body default)
        this.settings.animationContainer.append(loadingElement);
    }
    /**
      * @name _setText
      * @description agrega texto al loading
      * @param text texto pasado por parametro mediante la variable loadingText
    */
    setText(text) {
        const textLoadingElement = document.createElement('p');
        textLoadingElement.classList.add("typography-p", "p-top-m");
        textLoadingElement.innerHTML = text;
        return textLoadingElement;
    }
    /**
    * @name destroy
    * @description Elimina el loading en el HTML
    */
    destroy() {
        var _a;
        (_a = document.getElementById(this.settings.containerId)) === null || _a === void 0 ? void 0 : _a.remove();
    }
}

"use strict";
class modalBLUE {
    constructor(options) {
        this.options = options;
        this.idModal = "";
        this.elementReference = "";
        this.contentHTML = "";
        this.closeButtom = true;
        this.priority = 0;
        this.modalType = "bottom";
        this.modalColor = "";
        this.container = document.body;
        this.boxContent = null;
        this.boxModal = null;
        this.containerHTML = null;
        this.callBackOpenModal = () => undefined;
        this.callBackCloseModal = () => undefined;
        this.callBackDestroyModal = () => undefined;
        this.init = () => {
            this.clear();
            this.prepareView();
            this.addOpenModal();
        };
        this.clear = () => {
            this.container.style.position = "inherit";
            const modal = document.querySelector("#boxModal" + this.idModal);
            if (modal !== null) {
                const parent = modal === null || modal === void 0 ? void 0 : modal.parentElement;
                if (parent) {
                    const content = document.querySelector("#boxContent" + this.idModal);
                    parent.removeChild(modal);
                    if (content)
                        parent.removeChild(content);
                }
            }
        };
        this.prepareView = () => {
            this.boxModal = document.createElement("div");
            this.boxModal.setAttribute("id", "boxModal" + this.idModal);
            this.boxModal.setAttribute("class", "box-modal-main d-none " + (this === null || this === void 0 ? void 0 : this.boxModalClass));
            this.boxContent = document.createElement("div");
            this.boxContent.setAttribute("id", "boxContent" + this.idModal);
            this.boxContent.setAttribute("data-priority", (this.priority || 0).toString());
            this.boxContent.setAttribute("class", "box-modal-content modal-z-index d-none p-x-reset " + (this === null || this === void 0 ? void 0 : this.boxContentClass));
            this.container.append(this.boxModal);
            this.container.append(this.boxContent);
            if (this.closeButtom) {
                const buttonClose = document.createElement("button");
                buttonClose.setAttribute("id", "btnClose" + this.idModal);
                buttonClose.setAttribute("class", "icons x-block-before icons-l modal-btn-close cursor-pointer d-flex c-black-low d-flex j-content-center a-items-center");
                buttonClose.addEventListener("click", () => this.closeModalBox());
                this.boxContent.append(buttonClose);
                if (this.modalType == "full") {
                    buttonClose.classList.add("modal-close-inside");
                }
            }
            this.containerHTML = document.createElement("div");
            this.containerHTML.setAttribute("class", "overflow-y-auto p-sm-xl modal-container-z-index");
            this.boxContent.append(this.containerHTML);
            if (this.contentHTML instanceof HTMLElement) {
                this.containerHTML.appendChild(this.contentHTML);
            }
            else {
                this.containerHTML.innerHTML = this.contentHTML;
            }
            if (this.modalType == "full") {
                this.boxContent.classList.add("modal-content-full");
                this.boxModal.classList.add("modal-main-full");
                if (this.closeButtom) {
                    this.containerHTML.classList.add("p-top-xl");
                }
            }
            if (this.modalColor != "") {
                this.boxContent.style.backgroundColor = `rgba(var(${this.modalColor}), 0.99)`;
            }
        };
        this.addOpenModal = () => {
            const ref = document.querySelector("#" + this.elementReference);
            if (ref)
                ref.addEventListener("click", () => this.openModalBox());
        };
        this.openModalBox = () => {
            this.container.style.position = "relative";
            if (this.callBackOpenModal)
                this.callBackOpenModal();
            const modals = document.getElementsByClassName("box-modal-content");
            let currentPriority = 1;
            Array.from(modals).forEach((item) => {
                var _a;
                const dataPriority = (_a = item.getAttribute("data-priority")) !== null && _a !== void 0 ? _a : "";
                if (Number(dataPriority) >= currentPriority)
                    currentPriority = parseInt(dataPriority) + 1;
            });
            if (this.boxContent && this.boxModal) {
                this.boxContent.setAttribute("data-priority", currentPriority.toString());
                this.boxContent.style.zIndex = `${105 + currentPriority}`;
                this.boxModal.setAttribute("style", "z-index:" + (105 + currentPriority));
                this.boxModal.classList.remove("d-none");
                this.boxContent.classList.remove("d-none");
                this.boxModal.classList.add("d-block");
                this.boxContent.classList.add("d-block");
                const calcHeight = this.container.clientHeight * 0.87;
                if (this.containerHTML) {
                    this.containerHTML.setAttribute("style", "max-height:calc(" + calcHeight + "px)");
                }
                this.boxModal.classList.remove("modal-fadeOut-opacity");
                this.boxModal.classList.add("modal-fadeIn-opacity");
                if (this.modalType == "full") {
                    this.boxContent.classList.remove("modal-full-fadeOut");
                    this.boxContent.classList.add("modal-full-fadeIn");
                }
                else {
                    this.boxContent.classList.remove("modal-fadeOut");
                    this.boxContent.classList.add("modal-fadeIn");
                }
            }
        };
        this.closeModalBox = () => {
            if (this.boxModal) {
                this.boxModal.classList.remove("modal-fadeIn-opacity");
                this.boxModal.classList.add("modal-fadeOut-opacity");
            }
            if (this.boxContent) {
                if (this.modalType == "full") {
                    this.boxContent.classList.remove("modal-full-fadeIn");
                    this.boxContent.classList.add("modal-full-fedeOut");
                }
                else {
                    this.boxContent.classList.remove("modal-fadeIn");
                    this.boxContent.classList.add("modal-fadeOut");
                }
            }
            setTimeout(() => {
                if (this.boxModal) {
                    this.boxModal.classList.remove("d-block");
                    this.boxModal.classList.add("d-none");
                }
                if (this.boxContent) {
                    this.boxContent.classList.remove("d-block");
                    this.boxContent.classList.add("d-none");
                }
            }, 200);
            if (this.boxModal) {
                this.boxModal.removeAttribute("style");
            }
            if (this.boxContent) {
                this.boxContent.setAttribute("data-priority", "0");
                this.boxContent.style.zIndex = "auto";
            }
            if (this.callBackCloseModal)
                this.callBackCloseModal();
        };
        this.destroy = () => {
            const parent = this.container;
            if (this.boxModal)
                parent.removeChild(this.boxModal);
            if (this.boxContent)
                parent.removeChild(this.boxContent);
            this.boxModal = null;
            this.boxContent = null;
            if (this.callBackDestroyModal)
                this.callBackDestroyModal();
        };
        this.boxContentClass = options === null || options === void 0 ? void 0 : options.boxContentClass;
        this.boxModalClass = options === null || options === void 0 ? void 0 : options.boxModalClass;
        if (options === null || options === void 0 ? void 0 : options.idModal) {
            this.idModal = options === null || options === void 0 ? void 0 : options.idModal;
        }
        else {
            this.idModal = BLUEUtils.makeRandomId(15);
        }
        if (options === null || options === void 0 ? void 0 : options.container)
            this.container = options === null || options === void 0 ? void 0 : options.container;
        if (options === null || options === void 0 ? void 0 : options.elementReference)
            this.elementReference = options === null || options === void 0 ? void 0 : options.elementReference;
        if (options === null || options === void 0 ? void 0 : options.contentHTML)
            this.contentHTML = options === null || options === void 0 ? void 0 : options.contentHTML;
        if ((options === null || options === void 0 ? void 0 : options.closeButtom) != undefined || (options === null || options === void 0 ? void 0 : options.closeButtom) != null)
            this.closeButtom = options === null || options === void 0 ? void 0 : options.closeButtom;
        if (options === null || options === void 0 ? void 0 : options.priority)
            this.priority = options === null || options === void 0 ? void 0 : options.priority;
        if (options === null || options === void 0 ? void 0 : options.modalType)
            this.modalType = options === null || options === void 0 ? void 0 : options.modalType;
        if (options === null || options === void 0 ? void 0 : options.modalColor)
            this.modalColor = options === null || options === void 0 ? void 0 : options.modalColor;
        if (options === null || options === void 0 ? void 0 : options.callBackOpenModal)
            this.callBackOpenModal = options === null || options === void 0 ? void 0 : options.callBackOpenModal;
        if (options === null || options === void 0 ? void 0 : options.callBackCloseModal)
            this.callBackCloseModal = options === null || options === void 0 ? void 0 : options.callBackCloseModal;
        if (options === null || options === void 0 ? void 0 : options.callBackDestroyModal)
            this.callBackDestroyModal = options === null || options === void 0 ? void 0 : options.callBackDestroyModal;
        this.init();
    }
}
//  Fin del Plugin

"use strict";
// REVISION ------ 1.0
// DATE: --------- 03-10-2022
// DESCRIPTION: -- Define y contruye los elementos para el toast
// AUTHOR: ------- rvargas
// WORKTEAM: ----- Onix
// version 1.0
class NavMenu {
    constructor(options) {
        this.options = options;
        this.menuHeaderOptions = [];
        this.menuContentObject = [];
        this.idSelected = "";
        this.idContainerButtonHeader = "";
        this.textButtonHeader = "Menú";
        this.callbackNavMenu = () => undefined;
        this.idElement = options.idElement;
        this.menuContentObject = options.menuContentObject ? options.menuContentObject : this.menuContentObject;
        this.menuHeaderOptions = options.menuHeaderOptions ? options.menuHeaderOptions : this.menuHeaderOptions;
        this.idSelected = options.idSelected ? options.idSelected : this.idSelected;
        this.idContainerButtonHeader = options.idContainerButtonHeader ? options.idContainerButtonHeader : this.idContainerButtonHeader;
        this.textButtonHeader = options.textButtonHeader ? options.textButtonHeader : this.textButtonHeader;
        this.callbackNavMenu = options.callbackNavMenu ? options.callbackNavMenu : this.callbackNavMenu;
        this.init();
    }
    init() {
        this.createElementView();
        this.selectedOption();
    }
    selectedOption() {
        var _a, _b, _c, _d, _e;
        let menuSelected = document.getElementById(this.idSelected);
        if (menuSelected) {
            if (((_a = menuSelected.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains("side-submenu-li")) && ((_c = (_b = menuSelected.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement)) {
                let element = (_e = (_d = menuSelected.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.parentElement;
                this.fncOpenClose(element);
            }
            this.selectElementMenu(menuSelected);
        }
    }
    fillMenuOption(optionMenu, level) {
        let optionMenuClass = "";
        let optionMenuHtmlClass = "";
        let textElementClass = "";
        let plugin = this;
        let leftIconSpace = "p-right-s";
        if (level == 1) {
            optionMenuHtmlClass = "side-menu-li";
            optionMenuClass = "d-flex p-relative p-top-l p-bottom-l p-right-m p-left-s side-menu-section";
            textElementClass = "side-menu-text typography typography-p";
        }
        else if (level >= 2) {
            optionMenuHtmlClass = "side-submenu-li p-reset m-reset";
            optionMenuClass = "side-submenu-text side-menu-section d-flex side-menu-color typography_size-xs";
            textElementClass = "side-menu-text typography typography-h5 typography_size-xs";
        }
        let optionMenuHtml = document.createElement("li");
        optionMenuHtml.setAttribute("class", optionMenuHtmlClass);
        optionMenuHtml.setAttribute("role", "none");
        let optionMenuElement = document.createElement("div");
        optionMenuElement.setAttribute("role", "menuitem");
        optionMenuElement.setAttribute("class", optionMenuClass);
        if (optionMenu.id)
            optionMenuElement.setAttribute("id", optionMenu.id);
        if (optionMenu.dataId)
            optionMenuElement.setAttribute("data-id", optionMenu.dataId);
        if (optionMenu.action) {
            optionMenuElement.setAttribute("onclick", optionMenu.action);
        }
        if (level == 3) {
            optionMenu.iconLeft = "icons subcategory-stroke-before icons-3xl side-menu-translate-icon";
            leftIconSpace = "p-right-xs";
        }
        if (optionMenu.iconLeft) {
            let iconLeftElement = document.createElement("span");
            iconLeftElement.setAttribute("class", optionMenu.iconLeft + " " + leftIconSpace);
            optionMenuElement.append(iconLeftElement);
        }
        if (optionMenu.text) {
            let textElement = document.createElement("a");
            textElement.innerHTML = optionMenu.text;
            textElement.setAttribute("class", textElementClass);
            optionMenuElement.append(textElement);
            optionMenuElement.setAttribute("aria-label", optionMenu.text);
        }
        optionMenuHtml.append(optionMenuElement);
        if (optionMenu.submenu) {
            optionMenuElement.setAttribute("aria-haspopup", "true");
            optionMenuElement.setAttribute("aria-expanded", "false");
            let iconRightElement = document.createElement("span");
            iconRightElement.setAttribute("class", "sidemenu-icon-color-arrow p-right-xs p-left-xs a-self-center icons chevron-down-block-before icons-xs");
            optionMenuElement.append(iconRightElement);
            let subMenuElement = document.createElement("ul");
            subMenuElement.setAttribute("role", "menu");
            subMenuElement.setAttribute("aria-label", optionMenu.text ? optionMenu.text : "");
            subMenuElement.setAttribute("class", "side-submenu p-reset m-reset d-none ");
            optionMenu.submenu.forEach((item) => {
                subMenuElement.append(this.fillMenuOption(item, level + 1));
            });
            optionMenuHtml.append(subMenuElement);
            optionMenuHtml.setAttribute("data-eventActual", "false");
            optionMenuElement.addEventListener("click", () => {
                plugin.fncOpenClose(optionMenuHtml);
            });
        }
        else {
            optionMenuElement.addEventListener("click", () => {
                plugin.selectElementMenu(optionMenuElement);
            });
        }
        return optionMenuHtml;
    }
    animationOpenOrClose(height, element) {
        if (element != null) {
            element.setAttribute("style", "height:" + height + "px; overflow-y: hidden");
        }
    }
    closeAllSubmenu() {
        var _a, _b, _c, _d, _e;
        let menusOpens = document.querySelectorAll("li[data-eventActual=false]");
        for (let value of menusOpens) {
            value.setAttribute("aria-expanded", "false");
            if ((_a = value.querySelector(".side-menu-section")) === null || _a === void 0 ? void 0 : _a.classList.contains("side-menu-section-submenu")) {
                (_b = value.querySelector(".side-menu-section")) === null || _b === void 0 ? void 0 : _b.classList.remove("side-menu-section-submenu");
            }
            if (!((_c = value.querySelector(".side-submenu")) === null || _c === void 0 ? void 0 : _c.classList.contains("d-none"))) {
                let actualSubMenu = value.querySelector(".side-submenu");
                if (actualSubMenu) {
                    let heigthSubMenu = actualSubMenu.clientHeight;
                    let intervalo = 20 / heigthSubMenu;
                    let nIntervId = setInterval(() => {
                        heigthSubMenu = heigthSubMenu - 6;
                        if (0 >= heigthSubMenu) {
                            clearInterval(nIntervId);
                            actualSubMenu === null || actualSubMenu === void 0 ? void 0 : actualSubMenu.classList.add("d-none");
                            actualSubMenu === null || actualSubMenu === void 0 ? void 0 : actualSubMenu.setAttribute("style", "");
                            return;
                        }
                        this.animationOpenOrClose(heigthSubMenu, actualSubMenu);
                    }, intervalo);
                    (_d = value.querySelector(".sidemenu-icon-color-arrow")) === null || _d === void 0 ? void 0 : _d.classList.remove("chevron-up-block-before");
                    (_e = value.querySelector(".sidemenu-icon-color-arrow")) === null || _e === void 0 ? void 0 : _e.classList.add("chevron-down-block-before");
                }
            }
        }
    }
    fncOpenClose(element) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let sumenuItem = element.querySelector(".side-menu-section");
        element.setAttribute("data-eventActual", "true");
        if (element.classList.contains("side-submenu-li")) {
            (_b = (_a = document.querySelector(".side-menu-section-submenu")) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.setAttribute("data-eventActual", "true");
        }
        this.closeAllSubmenu();
        element.setAttribute("data-eventActual", "false");
        if (element.classList.contains("side-submenu-li")) {
            (_d = (_c = document.querySelector(".side-menu-section-submenu")) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.setAttribute("data-eventActual", "false");
        }
        (sumenuItem === null || sumenuItem === void 0 ? void 0 : sumenuItem.classList.contains("side-menu-section-submenu")) ? sumenuItem === null || sumenuItem === void 0 ? void 0 : sumenuItem.classList.remove("side-menu-section-submenu") : sumenuItem === null || sumenuItem === void 0 ? void 0 : sumenuItem.classList.add("side-menu-section-submenu");
        let classSubmMenu = element.querySelector(".side-submenu");
        if (classSubmMenu) {
            let heigthSubMenu = classSubmMenu === null || classSubmMenu === void 0 ? void 0 : classSubmMenu.clientHeight;
            if (classSubmMenu === null || classSubmMenu === void 0 ? void 0 : classSubmMenu.classList.contains("d-none")) {
                sumenuItem === null || sumenuItem === void 0 ? void 0 : sumenuItem.setAttribute("aria-expanded", "true");
                classSubmMenu === null || classSubmMenu === void 0 ? void 0 : classSubmMenu.classList.remove("d-none");
                heigthSubMenu = classSubmMenu === null || classSubmMenu === void 0 ? void 0 : classSubmMenu.clientHeight;
                classSubmMenu === null || classSubmMenu === void 0 ? void 0 : classSubmMenu.setAttribute("style", "height:0px; overflow-y: hidden");
                let intervalo = 20 / heigthSubMenu;
                let actualHeigth = 0;
                let nIntervId = setInterval(() => {
                    if (actualHeigth >= heigthSubMenu) {
                        clearInterval(nIntervId);
                        classSubmMenu === null || classSubmMenu === void 0 ? void 0 : classSubmMenu.setAttribute("style", "");
                        return;
                    }
                    actualHeigth = actualHeigth + 6;
                    this.animationOpenOrClose(actualHeigth, classSubmMenu);
                }, intervalo);
                (_e = element.querySelector(".sidemenu-icon-color-arrow")) === null || _e === void 0 ? void 0 : _e.classList.remove("chevron-down-block-before");
                (_f = element.querySelector(".sidemenu-icon-color-arrow")) === null || _f === void 0 ? void 0 : _f.classList.add("chevron-up-block-before");
            }
            else {
                let intervalo = 20 / heigthSubMenu;
                sumenuItem === null || sumenuItem === void 0 ? void 0 : sumenuItem.setAttribute("aria-expanded", "false");
                let nIntervId = setInterval(() => {
                    heigthSubMenu = heigthSubMenu - 6;
                    if (0 >= heigthSubMenu) {
                        clearInterval(nIntervId);
                        classSubmMenu === null || classSubmMenu === void 0 ? void 0 : classSubmMenu.classList.add("d-none");
                        classSubmMenu === null || classSubmMenu === void 0 ? void 0 : classSubmMenu.setAttribute("style", "");
                        return;
                    }
                    this.animationOpenOrClose(heigthSubMenu, classSubmMenu);
                }, intervalo);
                (_g = element.querySelector(".sidemenu-icon-color-arrow")) === null || _g === void 0 ? void 0 : _g.classList.remove("chevron-up-block-before");
                (_h = element.querySelector(".sidemenu-icon-color-arrow")) === null || _h === void 0 ? void 0 : _h.classList.add("chevron-down-block-before");
            }
        }
    }
    selectElementMenu(elementSelected) {
        var _a, _b, _c, _d, _e, _f;
        let menuOptionActive = document.querySelectorAll(".side-menu-active");
        for (const value of menuOptionActive) {
            value.classList.remove("side-menu-active");
            value.removeAttribute("aria-current");
            (_a = value.querySelector("a")) === null || _a === void 0 ? void 0 : _a.classList.remove("f-weight-m");
            if ((_b = value.parentElement) === null || _b === void 0 ? void 0 : _b.classList.contains("b-none")) {
                (_c = value.parentElement) === null || _c === void 0 ? void 0 : _c.classList.remove("b-none");
            }
        }
        elementSelected.classList.add("side-menu-active");
        elementSelected.setAttribute("aria-current", "page");
        (_d = elementSelected.querySelector("a")) === null || _d === void 0 ? void 0 : _d.classList.add("f-weight-m");
        if ((_e = elementSelected.parentElement) === null || _e === void 0 ? void 0 : _e.classList.contains("side-menu-li")) {
            (_f = elementSelected.parentElement) === null || _f === void 0 ? void 0 : _f.classList.add("b-none");
        }
        if (this.callbackNavMenu) {
            this.callbackNavMenu();
        }
    }
    createElementView() {
        let plugin = this;
        let menu = document.getElementById(this.idElement);
        menu === null || menu === void 0 ? void 0 : menu.setAttribute("class", "leftMenu");
        let menuNav = document.createElement("nav");
        let containerMenusOptionsH = document.createElement("div");
        menuNav.setAttribute("aria-label", "Menu de navegavión del BAC");
        if (this.menuContentObject) {
            let menuUlPrincipal = document.createElement("ul");
            menuUlPrincipal.setAttribute("role", "menubar");
            menuUlPrincipal.setAttribute("aria-label", "Menu elemento principal");
            menuUlPrincipal.classList.add("d-flex", "f-column", "p-reset", "m-reset", "menuContent", "side-menu", "side-menu-color");
            this.menuContentObject.forEach((item) => {
                menuUlPrincipal.append(this.fillMenuOption(item, 1));
                menuNav.append(menuUlPrincipal);
            });
        }
        menu === null || menu === void 0 ? void 0 : menu.append(menuNav);
        if (this.menuHeaderOptions) {
            containerMenusOptionsH.setAttribute("class", "p-x-m p-y-s j-content-around menuHeaderContainerOptions");
            this.menuHeaderOptions.forEach((item) => {
                containerMenusOptionsH.append(this.fillMenuOptionHeader(item));
            });
        }
        menu === null || menu === void 0 ? void 0 : menu.append(containerMenusOptionsH);
        let containerButtonHeader = document.getElementById(this.idContainerButtonHeader);
        containerButtonHeader === null || containerButtonHeader === void 0 ? void 0 : containerButtonHeader.setAttribute("class", "menuButtomContainer a-items-center j-content-end p-right-xs");
        let textButtonHeader = document.createElement("p");
        textButtonHeader.setAttribute("class", "m-right-xs menuButtomHeaderText m-reset typography-h5 f-weight-m");
        textButtonHeader.innerHTML = this.textButtonHeader;
        let iconButtomHeader = document.createElement("span");
        iconButtomHeader.setAttribute("class", "icons hamburguer-menu-block-before icons-2xl m-right-m menuButtomHeaderIcon m-bottom-xs");
        containerButtonHeader === null || containerButtonHeader === void 0 ? void 0 : containerButtonHeader.append(textButtonHeader);
        containerButtonHeader === null || containerButtonHeader === void 0 ? void 0 : containerButtonHeader.append(iconButtomHeader);
        iconButtomHeader.addEventListener("click", () => {
            plugin.fncOpenCloseMenuLeft(iconButtomHeader, menu);
        });
    }
    ;
    fncOpenCloseMenuLeft(element, menu) {
        if (element.classList.contains("hamburguer-menu-block-before")) {
            element.classList.remove("hamburguer-menu-block-before");
            element.classList.add("x-block-before");
            menu === null || menu === void 0 ? void 0 : menu.classList.add("d-block");
        }
        else {
            element.classList.remove("x-block-before");
            element.classList.add("hamburguer-menu-block-before");
            menu === null || menu === void 0 ? void 0 : menu.classList.remove("d-block");
        }
    }
    fillMenuOptionHeader(optionMenuheader) {
        let menuHeaderItem = document.createElement("div");
        menuHeaderItem.setAttribute("class", "d-flex f-column a-items-center w-100");
        let iconMenuHeaderItem = document.createElement("span");
        let textElement = document.createElement("p");
        if (optionMenuheader.action) {
            menuHeaderItem.setAttribute("onclick", optionMenuheader.action);
        }
        if (optionMenuheader.id) {
            menuHeaderItem.setAttribute("id", optionMenuheader.id);
        }
        if (optionMenuheader.classIcon) {
            iconMenuHeaderItem.setAttribute("class", optionMenuheader.classIcon + " p-top-xs");
        }
        if (optionMenuheader.text) {
            textElement.innerHTML = optionMenuheader.text;
            textElement.setAttribute("class", "menuHeaderTextOption m-reset m-top-xs m-bottom-s typography-h5 f-weight-m");
        }
        menuHeaderItem.append(iconMenuHeaderItem);
        menuHeaderItem.append(textElement);
        return menuHeaderItem;
    }
    ;
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para la animacion randon
// AUTHOR: ------- WElizondo
// WORKTEAM: ----- Onix
// version 1.0
var RandomAnimationSvgPath;
(function (RandomAnimationSvgPath) {
    RandomAnimationSvgPath["RANDOM_ANIMATION_SVG"] = "<svg width=\"100%\" height=\"100%\"  preserveAspectRatio=\"xMinYMid\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:bx=\"https://boxy-svg.com\">\n    <defs>\n      <filter id=\"filter\" x=\"-500%\" y=\"-500%\" width=\"1000%\" height=\"1000%\" bx:preset=\"outline 1 1.5 rgba(255,255,255,1)\">\n        <feMorphology in=\"SourceAlpha\" result=\"dilated\" operator=\"dilate\" radius=\"1.5\"/>\n        <feFlood flood-color=\"rgba(255,255,255,1)\" result=\"flood\"/>\n        <feComposite in=\"flood\" in2=\"dilated\" operator=\"in\" result=\"outline\"/>\n        <feMerge>\n          <feMergeNode in=\"outline\"/>\n          <feMergeNode in=\"SourceGraphic\"/>\n        </feMerge>\n      </filter> \n    </defs>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n    <path  fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#6ADB91\" style=\"filter: url(#filter);\"/>\n  </svg>";
})(RandomAnimationSvgPath || (RandomAnimationSvgPath = {}));
var IconPath;
(function (IconPath) {
    //catalogo de paths 
    IconPath["PATH_DOLAR"] = "M -6.039 13.525 L -6.039 13.524 L -11.325 0.345 C -11.438 0.064 -11.758 -0.072 -12.04 0.039 L -33.487 8.518 C -33.575 8.556 -33.65 8.616 -33.708 8.692 C -33.885 8.784 -33.998 8.966 -34 9.166 L -34 23.355 C -34 23.656 -33.754 23.9 -33.45 23.9 L -10.364 23.9 C -10.061 23.9 -9.816 23.656 -9.816 23.355 L -9.816 15.605 L -6.346 14.233 C -6.064 14.122 -5.927 13.804 -6.039 13.525 Z M -10.914 22.809 L -32.9 22.809 L -32.9 9.712 L -10.914 9.712 L -10.914 22.809 Z M -24.829 8.623 L -15.625 4.981 C -14.804 5.839 -13.666 6.326 -12.474 6.331 L -11.557 8.623 L -24.829 8.623 Z M -9.816 14.433 L -9.816 9.166 C -9.816 8.864 -10.061 8.62 -10.364 8.62 L -10.374 8.62 L -11.538 5.716 C -11.552 5.692 -11.567 5.668 -11.584 5.647 C -11.642 5.383 -11.887 5.205 -12.158 5.227 C -13.266 5.327 -14.352 4.864 -15.039 3.994 C -15.211 3.785 -15.512 3.732 -15.745 3.872 C -15.771 3.876 -15.797 3.88 -15.822 3.886 L -27.059 8.329 C -27.194 8.381 -27.303 8.486 -27.36 8.62 L -30.773 8.62 L -12.144 1.255 L -7.264 13.422 L -9.816 14.433 Z M -31.409 19.125 C -30.342 19.438 -29.507 20.266 -29.19 21.325 C -29.12 21.556 -28.906 21.715 -28.664 21.715 C -28.635 21.713 -28.606 21.709 -28.578 21.702 C -28.554 21.709 -28.529 21.714 -28.504 21.718 L -15.312 21.718 C -15.29 21.715 -15.266 21.71 -15.244 21.704 C -14.97 21.77 -14.694 21.603 -14.626 21.331 L -14.626 21.328 C -14.31 20.267 -13.474 19.438 -12.407 19.124 C -12.148 19.045 -11.987 18.789 -12.03 18.523 C -12.023 18.498 -12.017 18.47 -12.014 18.443 L -12.014 14.078 C -12.017 14.05 -12.023 14.023 -12.03 13.997 C -11.988 13.731 -12.149 13.475 -12.408 13.396 C -13.475 13.083 -14.311 12.253 -14.625 11.192 C -14.705 10.934 -14.966 10.773 -15.234 10.818 C -15.259 10.811 -15.286 10.806 -15.312 10.803 L -28.504 10.803 C -28.531 10.806 -28.558 10.811 -28.585 10.819 C -28.853 10.777 -29.111 10.937 -29.19 11.194 C -29.506 12.253 -30.341 13.083 -31.409 13.396 C -31.668 13.475 -31.829 13.731 -31.786 13.997 C -31.793 14.023 -31.799 14.05 -31.802 14.078 L -31.802 18.443 C -31.799 18.469 -31.793 18.494 -31.786 18.519 C -31.831 18.786 -31.67 19.045 -31.409 19.125 Z M -30.702 14.299 C -29.599 13.859 -28.724 12.99 -28.281 11.894 L -15.536 11.894 C -15.092 12.99 -14.217 13.859 -13.113 14.299 L -13.113 18.221 C -14.216 18.662 -15.092 19.53 -15.535 20.626 L -28.281 20.626 C -28.724 19.53 -29.599 18.662 -30.702 18.221 L -30.702 14.299 Z M -18.61 16.26 C -18.61 18.068 -20.086 19.534 -21.907 19.534 C -23.729 19.533 -25.204 18.068 -25.205 16.26 C -25.205 14.452 -23.729 12.986 -21.907 12.986 C -20.086 12.986 -18.61 14.452 -18.61 16.26 Z M -19.709 16.26 C -19.709 15.055 -20.693 14.078 -21.907 14.078 C -23.122 14.078 -24.107 15.055 -24.107 16.26 C -24.107 17.466 -23.122 18.444 -21.907 18.444 C -20.693 18.444 -19.709 17.466 -19.709 16.26 Z M -27.954 17.079 C -27.499 17.079 -27.13 16.712 -27.13 16.26 C -27.13 15.808 -27.499 15.442 -27.954 15.442 C -28.409 15.442 -28.778 15.808 -28.778 16.26 C -28.778 16.712 -28.409 17.079 -27.954 17.079 Z M -27.954 15.988 C -27.802 15.988 -27.679 16.109 -27.679 16.26 C -27.679 16.411 -27.802 16.534 -27.954 16.534 C -28.106 16.534 -28.229 16.411 -28.229 16.26 C -28.229 16.109 -28.106 15.988 -27.954 15.988 Z M -15.037 16.26 C -15.037 16.712 -15.406 17.079 -15.862 17.079 C -16.317 17.079 -16.686 16.712 -16.686 16.26 C -16.686 15.808 -16.317 15.442 -15.862 15.442 C -15.406 15.442 -15.037 15.808 -15.037 16.26 Z M -15.586 16.26 C -15.586 16.109 -15.71 15.988 -15.862 15.988 C -16.013 15.988 -16.136 16.109 -16.136 16.26 C -16.136 16.411 -16.013 16.534 -15.862 16.534 C -15.71 16.534 -15.586 16.411 -15.586 16.26 Z";
    IconPath["PATH_CENT"] = "M -12.818 3.818 C -15.28 1.356 -18.541 0 -22 0 C -25.459 0 -28.72 1.356 -31.182 3.818 C -33.644 6.281 -35 9.541 -35 13 C -35 16.459 -33.644 19.72 -31.182 22.182 C -28.72 24.644 -25.459 26 -22 26 C -18.541 26 -15.28 24.644 -12.818 22.182 C -10.356 19.72 -9 16.459 -9 13 C -9 9.541 -10.356 6.281 -12.818 3.818 Z M -22 24.477 C -28.328 24.477 -33.476 19.328 -33.476 13 C -33.476 6.672 -28.328 1.524 -22 1.524 C -15.672 1.524 -10.523 6.672 -10.523 13 C -10.523 19.328 -15.672 24.477 -22 24.477 Z M -22 3.098 C -27.46 3.098 -31.902 7.54 -31.902 13 C -31.902 18.46 -27.46 22.903 -22 22.903 C -16.54 22.903 -12.098 18.46 -12.098 13 C -12.098 7.54 -16.54 3.098 -22 3.098 Z M -22 21.379 C -26.62 21.379 -30.379 17.62 -30.379 13 C -30.379 8.38 -26.62 4.621 -22 4.621 C -17.38 4.621 -13.621 8.38 -13.621 13 C -13.621 17.62 -17.38 21.379 -22 21.379 Z M -18.953 11.469 C -19.374 11.469 -19.715 11.128 -19.715 10.707 C -19.715 10.059 -20.361 9.489 -21.238 9.275 L -21.238 12.292 C -20.547 12.402 -19.908 12.663 -19.388 13.052 C -18.628 13.623 -18.191 14.434 -18.191 15.278 C -18.191 16.121 -18.628 16.932 -19.388 17.503 C -19.908 17.893 -20.547 18.153 -21.238 18.264 L -21.238 19.094 C -21.238 19.515 -21.579 19.856 -22 19.856 C -22.421 19.856 -22.762 19.515 -22.762 19.094 L -22.762 18.264 C -23.452 18.153 -24.092 17.893 -24.611 17.503 C -25.372 16.932 -25.808 16.121 -25.808 15.278 C -25.808 14.857 -25.467 14.516 -25.047 14.516 C -24.626 14.516 -24.285 14.857 -24.285 15.278 C -24.285 15.926 -23.639 16.496 -22.762 16.71 L -22.762 13.693 C -23.452 13.583 -24.092 13.322 -24.611 12.933 C -25.372 12.362 -25.808 11.551 -25.808 10.707 C -25.808 9.864 -25.372 9.053 -24.611 8.482 C -24.092 8.092 -23.452 7.832 -22.762 7.721 L -22.762 6.899 C -22.762 6.478 -22.421 6.137 -22 6.137 C -21.579 6.137 -21.238 6.478 -21.238 6.899 L -21.238 7.721 C -20.547 7.832 -19.908 8.092 -19.388 8.482 C -18.628 9.053 -18.191 9.864 -18.191 10.707 C -18.191 11.128 -18.532 11.469 -18.953 11.469 Z M -22.762 9.275 C -23.639 9.489 -24.285 10.059 -24.285 10.707 C -24.285 11.356 -23.639 11.926 -22.762 12.14 L -22.762 9.275 Z M -21.238 16.71 C -20.361 16.496 -19.715 15.926 -19.715 15.278 C -19.715 14.629 -20.361 14.06 -21.238 13.845 L -21.238 16.71 Z";
    IconPath["PATH_MOLECULE"] = "M -32.933 5.319 C -32.951 8.252 -30.616 10.638 -27.728 10.638 C -26.963 10.638 -26.235 10.471 -25.577 10.17 L -21.493 17.627 C -22.371 18.235 -22.952 19.256 -22.959 20.411 C -22.959 20.447 -22.959 20.483 -22.958 20.519 L -30.494 21.868 C -30.82 21.308 -31.419 20.933 -32.106 20.933 C -33.144 20.933 -33.993 21.79 -34 22.844 C -34.006 23.898 -33.168 24.756 -32.13 24.756 C -31.092 24.756 -30.242 23.898 -30.236 22.844 C -30.236 22.808 -30.236 22.772 -30.238 22.736 L -22.817 21.408 C -22.406 22.782 -21.149 23.782 -19.66 23.782 C -17.829 23.782 -16.33 22.27 -16.319 20.411 C -16.307 18.551 -17.787 17.039 -19.618 17.039 C -19.995 17.039 -20.358 17.103 -20.697 17.221 L -24.799 9.731 C -23.795 9.045 -23.033 8.018 -22.678 6.816 L -17.477 8.138 C -17.566 8.482 -17.614 8.842 -17.617 9.213 C -17.631 11.609 -15.724 13.559 -13.364 13.559 C -11.005 13.559 -9.073 11.609 -9.058 9.213 C -9.044 6.817 -10.951 4.868 -13.311 4.868 C -14.99 4.868 -16.452 5.855 -17.161 7.288 L -22.496 5.932 C -22.471 5.731 -22.458 5.526 -22.457 5.319 C -22.439 2.386 -24.774 0 -27.662 0 C -30.55 0 -32.914 2.386 -32.933 5.319 Z M -32.045 5.319 C -32.03 2.883 -30.066 0.901 -27.668 0.901 C -25.269 0.901 -23.33 2.883 -23.345 5.319 C -23.36 7.755 -25.323 9.736 -27.722 9.736 C -30.121 9.736 -32.06 7.755 -32.045 5.319 Z M -13.316 5.769 C -15.186 5.769 -16.717 7.314 -16.729 9.213 C -16.74 11.112 -15.229 12.657 -13.359 12.657 C -11.489 12.657 -9.958 11.112 -9.946 9.213 C -9.935 7.314 -11.446 5.769 -13.316 5.769 Z M -22.071 20.411 C -22.063 19.049 -20.965 17.94 -19.623 17.94 C -18.282 17.94 -17.198 19.049 -17.206 20.411 C -17.215 21.773 -18.313 22.881 -19.654 22.881 C -20.995 22.881 -22.08 21.773 -22.071 20.411 Z M -33.112 22.844 C -33.109 22.287 -32.66 21.834 -32.112 21.834 C -31.563 21.834 -31.12 22.288 -31.124 22.844 C -31.127 23.401 -31.576 23.854 -32.124 23.854 C -32.672 23.854 -33.116 23.401 -33.112 22.844 Z M -27.681 2.992 C -28.944 2.992 -29.977 4.036 -29.985 5.318 C -29.987 5.567 -30.187 5.769 -30.432 5.769 C -30.677 5.769 -30.875 5.567 -30.873 5.318 C -30.862 3.539 -29.427 2.091 -27.675 2.091 C -27.43 2.091 -27.232 2.293 -27.234 2.542 C -27.235 2.79 -27.436 2.992 -27.681 2.992 Z";
})(IconPath || (IconPath = {}));
class RandomAnimationComponent {
    constructor(options) {
        if (options.animationContainerID === null || options.animationContainerID === undefined) {
            throw new Error(`El parametro animationContainerID es obligatorio, para crear la animacion necesita indicar cual será el elemento contenedor`);
        }
        this.settings = Object.assign({}, {
            paths: [{ repeat: 1, d: IconPath.PATH_DOLAR }],
            maxAnimationTime: 2,
            minAnimationTime: 5,
            height: '100px',
            width: '100%',
            position: '',
            zIndex: '',
        }, options);
        this.animation = { animationContainer: document.getElementById(options.animationContainerID) };
        this._build();
    }
    _build() {
        this._responseSVG();
        this._setPositionContainer();
        this._setPathElement();
    }
    /**
     * @name responseSVG
     * @description se encarga buscar el svg para renderizar en el plugin
     */
    _responseSVG() {
        var _a;
        const divTem = document.createElement('div');
        divTem.innerHTML = RandomAnimationSvgPath.RANDOM_ANIMATION_SVG;
        if (!(divTem.firstElementChild instanceof SVGElement)) {
            throw new Error(`Expected e to be an SVGElement, was ${(_a = this.settings.animationSVG.firstElementChild) === null || _a === void 0 ? void 0 : _a.className}`);
        }
        this.settings.animationSVG = divTem.firstElementChild;
        this.settings.animationSVG.setAttribute("id", this.settings.animationContainerID + "SVG");
        this.animation.animationContainer.append(this.settings.animationSVG);
    }
    /**
     * @name _setPositionContainer
     * @description se encarga de setear la posicion del contenedor principal
     */
    _setPositionContainer() {
        this.animation.animationContainer.style.setProperty("height", this.settings.height);
        this.animation.animationContainer.style.setProperty("width", this.settings.width);
        this.animation.animationContainer.style.setProperty("position", this.settings.position);
        this.animation.animationContainer.style.setProperty("z-index", this.settings.zIndex);
        this.settings.animationSVG.setAttribute("viewbox", "0 0 " + this.settings.height + " " + this.settings.height);
    }
    /**
     * @name _setPathElement
     * @description se encarga de setear los elementos relacionados los paths
     */
    _setPathElement() {
        let counter = 0;
        let pathArray = [];
        for (const index in this.settings.paths) {
            for (let i = 0; i < this.settings.paths[index].repeat; i++) {
                const pathID = BLUEUtils.makeRandomId(15);
                this.settings.animationSVG.getElementsByTagName("path")[counter].setAttribute("id", pathID);
                this.settings.animationSVG.getElementsByTagName("path")[counter].setAttribute("d", this.settings.paths[index].d);
                document.getElementById(pathID).style.setProperty("--animationInitY", this._getPositionAnimationY() + "px");
                document.getElementById(pathID).style.setProperty("--animationEndY", this._getPositionAnimationY() + "px");
                document.getElementById(pathID).style.setProperty("--animationEndX", this._getPositionAnimationEndX() + "px");
                document.getElementById(pathID).style.setProperty("--time", this._getRandomTimer() + "s");
                document.getElementById(pathID).style.setProperty("--cubic-bezier", "cubic-bezier(" + this._getCubicBezier() + ", " + this._getCubicBezier() + ", " + this._getCubicBezier() + ", " + this._getCubicBezier() + ")");
                document.getElementById(pathID).style.setProperty("--iniRotate", this._getRotate() + "deg");
                document.getElementById(pathID).style.setProperty("--endRotate", this._getRotate() + "deg");
                pathArray.push(document.getElementById(pathID));
                counter++;
            }
        }
        this.settings.pathArrays = pathArray;
    }
    /**
     * @name _getPositionAnimationEndX
     * @description se encarga obtener la posicion que va utilizar X
     */
    _getPositionAnimationEndX() {
        return this.animation.animationContainer.clientWidth + 34;
    }
    /**
     * @name _getPositionAnimationY
     * @description se encarga obtener la posicion que va utilizar Y
     */
    _getPositionAnimationY() {
        let position = Math.floor(this.animation.animationContainer.clientHeight - (35));
        return Math.floor(Math.random() * (position - 35) + 35);
    }
    /**
     * @name _getRandomTimer
     * @description se encarga obtener cuanto va durar la animacion
     */
    _getRandomTimer() {
        return (Math.floor(Math.random() * (this.settings.maxAnimationTime - this.settings.minAnimationTime) + this.settings.minAnimationTime));
    }
    /**
     * @name _getCubicBezier
     * @description se encarga obtener el valor aleatorio que utiliza la propiedad cubicBezier
     */
    _getCubicBezier() {
        return Math.round(Math.random() * 100.0) / 100.0;
    }
    /**
    * @name _getRotate
    * @description se encarga obtener el valor aleatorio del rotate de la animacion
    */
    _getRotate() {
        return Math.floor(Math.random() * (301 - 1) + 1);
    }
    /**
     * @name _isMobile
     * @description valida si es mobile donde se va utilizar la animacion
     */
    _isMobile() {
        return ((navigator.userAgent.match(/Android/i)) ||
            (navigator.userAgent.match(/webOS/i)) ||
            (navigator.userAgent.match(/iPhone/i)) ||
            (navigator.userAgent.match(/iPad/i)));
    }
    initAnimation() {
        for (const index in this.settings.pathArrays) {
            document.getElementById(this.settings.pathArrays[index].id).classList.add("animation-position");
        }
    }
    stopAnimation() {
        for (const index in this.settings.pathArrays) {
            document.getElementById(this.settings.pathArrays[index].id).classList.remove("animation-position");
        }
    }
    destroy() {
        let containerPlugin = document.getElementById(this.settings.animationContainerID + "SVG");
        if (containerPlugin !== null && containerPlugin !== undefined) {
            containerPlugin.remove();
        }
    }
}

"use strict";
class SeeMore {
    constructor(options) {
        this.parentElementReference = options.parentElementReference;
        this.stepSize = options.stepSize;
        this.currentMaxData = 0;
        this.componentText = options.componentText;
        this.componentId = options.componentId ? options.componentId : "";
        this.dataLength = options.dataLength;
        this.componentClassList = options.componentClassList ? options.componentClassList : [];
        this.componentStyleList = options.componentStyleList ? options.componentStyleList : [];
        this.iconStyleList = options.iconStyleList ? options.iconStyleList : [];
        this.callbackFunction = options.callbackFunction;
        this.componentInstance = document.createElement("a");
        this.parentComponentInstance = document.createElement("div");
        this._init();
    }
    _init() {
        this._build();
        this._show();
        this._calculateSteps();
    }
    _build() {
        let componentElement = this._createComponentElement();
        this.componentInstance = componentElement;
        componentElement.addEventListener("click", () => {
            this._calculateSteps();
        });
        if (this.componentClassList && this.componentClassList.length > 0) {
            for (let className of this.componentClassList) {
                componentElement.classList.add(className);
            }
        }
        if (this.componentStyleList && this.componentStyleList.length > 0) {
            componentElement = this._setStyleToElement(componentElement, this.componentStyleList);
        }
        let textElement = this._createTextElement();
        let iconElement = this._createIconElement();
        if (this.iconStyleList && this.iconStyleList.length > 0) {
            iconElement = this._setStyleToElement(iconElement, this.iconStyleList);
        }
        componentElement.appendChild(textElement);
        componentElement.appendChild(iconElement);
    }
    _createComponentElement() {
        let componentElement = document.createElement("a");
        componentElement.setAttribute("id", this.componentId ? this.componentId : BLUEUtils.makeRandomId(15));
        componentElement.setAttribute("class", "see-more-principal");
        return componentElement;
    }
    _createTextElement() {
        let textElement = document.createElement("span");
        textElement.innerHTML = `${this.componentText}`;
        return textElement;
    }
    _createIconElement() {
        let iconElement = document.createElement("i");
        iconElement.setAttribute("class", "icons chevron-down-block-before see-more-icon");
        return iconElement;
    }
    _show() {
        let parentComponent = document.querySelector(`#${this.parentElementReference}`);
        if (!parentComponent)
            return false;
        this.parentComponentInstance = parentComponent;
        parentComponent.classList.add("see-more-parent");
        parentComponent.appendChild(this.componentInstance);
        return true;
    }
    _calculateSteps() {
        this.currentMaxData = this.currentMaxData + this.stepSize;
        if (this.currentMaxData >= this.dataLength)
            this._hide();
        this.callbackFunction(this.currentMaxData);
    }
    _hide() {
        this.parentComponentInstance.style.display = "none";
    }
    _setStyleToElement(element, styleArray) {
        for (let i = 0; i < styleArray.length; i++) {
            Object.keys(styleArray[i]).forEach((key) => {
                element.style.setProperty(key, styleArray[i][key]);
            });
        }
        return element;
    }
}

"use strict";
// REVISION ------ 1.0
// DATE: --------- 03-10-2022
// DESCRIPTION: -- Define y contruye los elementos para el toast
// AUTHOR: ------- rvargas
// WORKTEAM: ----- Onix
// version 1.0
class Timer {
    constructor(options) {
        var _a, _b;
        this.options = options;
        this.animationIdCounter = 0;
        this.startAutomatic = true;
        this.initSecond = 0;
        this.timerState = [
            {
                from: 60,
                color: '--c-positive-low',
            },
            {
                from: 30,
                color: '--c-attention-low',
            },
            {
                from: 19,
                color: '--c-brand-low',
            }
        ];
        this.callbackTimer = () => undefined;
        this.counterTime = 0;
        this.strokeDashOffSetActual = 0;
        this.nextChangeColor = {};
        this.init = () => {
            this.createElementView();
        };
        this.createElementView = () => {
            var _a, _b, _c, _d;
            let svg = '<svg id="' + this.idElement + 'timerSVG" class="timer-svg" viewBox="0 0 100 100"><circle cy="50%" cx="50%" r="40" class="timer-circle timer-circle-shadow"></circle><circle id="' + this.idElement + 'circle" cy="50%" cx="50%" r="40" stroke-dasharray="' + 2 * Math.PI * 40 + '" class="timer-circle timer-circle-front timerWaiting"></circle></svg>';
            (_a = document.getElementById(this.idElement)) === null || _a === void 0 ? void 0 : _a.classList.add("d-flex", "j-content-center", "a-items-center");
            let contentSVG = document.createElement("div");
            contentSVG.setAttribute("id", this.idElement + "ContentSVG");
            contentSVG.classList.add("container-circle-timer");
            contentSVG.innerHTML = svg;
            (_b = document.getElementById(this.idElement)) === null || _b === void 0 ? void 0 : _b.append(contentSVG);
            let contentTextTimer = document.createElement("div");
            contentTextTimer.setAttribute("id", this.idElement + "ContentTimer");
            contentTextTimer.classList.add("container-text-timer", "d-flex", "j-content-center", "a-items-center", "p-relative");
            contentTextTimer.innerHTML = '<label id="' + this.idElement + 'TextSecond" class="typography-p text-timer-second">' + this.initSecond + ' s</label>';
            (_c = document.getElementById(this.idElement)) === null || _c === void 0 ? void 0 : _c.append(contentTextTimer);
            this.cleanAnimationValues(this.initSecond);
            (_d = document.getElementById(this.idElement + "circle")) === null || _d === void 0 ? void 0 : _d.style.setProperty("--stroke-dashoffset", "" + this.strokeDashOffSetActual);
            if (this.startAutomatic) {
                this.initAnimation();
            }
        };
        this.cleanAnimationValues = (secondInit) => {
            var _a, _b, _c;
            let timeInitial = this.timerState[0].from ? this.timerState[0].from : 0;
            let circunference = 2 * Math.PI * 40;
            this.counterTime = 0;
            clearInterval(this.timer);
            this.strokeDashOffSetActual = (timeInitial - this.initSecond) * ((circunference) / (timeInitial));
            for (let i = 0; i < ((_a = this.timerState) === null || _a === void 0 ? void 0 : _a.length); i++) {
                let nodeActFrom = this.timerState[i].from != undefined ? this.timerState[i].from : 0;
                let nodeActColor = this.timerState[i].color != undefined ? this.timerState[i].color : 0;
                if (nodeActFrom && nodeActFrom >= secondInit) {
                    (_b = document.getElementById(this.idElement + "TextSecond")) === null || _b === void 0 ? void 0 : _b.style.setProperty("--timer-color", "var(" + nodeActColor + ")");
                    (_c = document.getElementById(this.idElement + "circle")) === null || _c === void 0 ? void 0 : _c.style.setProperty("--timer-color", "var(" + nodeActColor + ")");
                    if (this.timerState[i + 1]) {
                        this.nextChangeColor = this.timerState[i + 1];
                        this.nextChangeColor.index = i + 1;
                    }
                }
            }
        };
        this.startAnimation = (secondInit) => {
            if (secondInit) {
                this.initAnimation(secondInit);
            }
            else {
                console.error("Se requiere el segundo donde iniciar");
            }
        };
        this.initAnimation = (secondInit) => {
            if (secondInit) {
                this.initSecond = secondInit;
                this.cleanAnimationValues(secondInit);
            }
            this.timer = setInterval(this.animationCircleRegresive, 250);
        };
        this.animationCircleRegresive = () => {
            var _a, _b, _c, _d;
            this.counterTime = this.counterTime + 0.25;
            let timeToShow = this.initSecond - this.counterTime;
            if (timeToShow < 0) {
                clearInterval(this.timer);
                if (this.callbackTimer) {
                    this.callbackTimer();
                }
                return;
            }
            let textLabelSecond = document.getElementById(this.idElement + "TextSecond");
            let timeToShowCeil = Math.ceil(timeToShow);
            if (textLabelSecond) {
                textLabelSecond.innerHTML = timeToShowCeil + " s";
            }
            let fromMayor = this.timerState[0].from ? this.timerState[0].from : 0;
            let positionPerSecuence = ((2 * Math.PI * 40) / (fromMayor)) / 4;
            this.strokeDashOffSetActual = this.strokeDashOffSetActual + positionPerSecuence;
            if (this.strokeDashOffSetActual) {
                (_a = document.getElementById(this.idElement + "circle")) === null || _a === void 0 ? void 0 : _a.style.setProperty("--stroke-dashoffset", "" + this.strokeDashOffSetActual);
            }
            if (this.nextChangeColor.from == timeToShowCeil) {
                (_b = document.getElementById(this.idElement + "circle")) === null || _b === void 0 ? void 0 : _b.style.setProperty("--timer-color", "var(" + this.nextChangeColor.color + ")");
                (_c = document.getElementById(this.idElement + "TextSecond")) === null || _c === void 0 ? void 0 : _c.style.setProperty("--timer-color", "var(" + this.nextChangeColor.color + ")");
                let nextIndex = this.nextChangeColor.index ? ((_d = this.nextChangeColor) === null || _d === void 0 ? void 0 : _d.index) + 1 : -1;
                if (nextIndex > -1 && this.timerState[nextIndex]) {
                    this.nextChangeColor = this.timerState[nextIndex];
                }
            }
        };
        this.idElement = options.idElement;
        this.animationIdCounter = 0;
        if ((options === null || options === void 0 ? void 0 : options.startAutomatic) != undefined || (options === null || options === void 0 ? void 0 : options.startAutomatic) != null) {
            this.startAutomatic = options === null || options === void 0 ? void 0 : options.startAutomatic;
        }
        this.timerState = options.timerState ? options.timerState : this.timerState;
        this.callbackTimer = options.callbackTimer ? options.callbackTimer : this.callbackTimer;
        if (options.initSecond) {
            this.initSecond = options.initSecond;
        }
        else if ((_a = this.timerState[0]) === null || _a === void 0 ? void 0 : _a.from) {
            this.initSecond = (_b = this.timerState[0]) === null || _b === void 0 ? void 0 : _b.from;
        }
        this.init();
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y contruye los elementos para el toast
// AUTHOR: ------- RVargas
// WORKTEAM: ----- Onix
// version 1.0
class Toast {
    constructor(option) {
        this.idElement = option.idElement;
        this.container = option.container;
        this.title = option.title;
        this.description = option.description;
        this.icon = option.icon;
        this.backgroundColor = option.backgroundColor;
        this.color = option.color;
        this.itemLeftCustom = option.itemLeftCustom;
        this.itemRightCustom = option.itemRightCustom;
        this.animationIn = option.animationIn;
        this.animationOut = option.animationOut;
        this.timeIn = option.timeIn;
        this.timeOut = option.timeOut;
        this.autoClose = option.autoClose;
        this.timeAutoClose = option.timeAutoClose;
        this.position = option.position;
        this.instanceElement = document.createElement("div");
        this.instanceContainer = document.createElement("div");
        this.init();
    }
    init() {
        this.build();
        this.show();
        this.autoCloseFunction();
    }
    buildElement(idElement) {
        if (idElement) {
            let element = document.querySelector(`#${idElement}`);
            if (!element) {
                element = document.createElement("div");
                element.setAttribute("id", idElement);
            }
            return element;
        }
        else {
            const element = document.createElement("div");
            element.setAttribute("id", BLUEUtils.makeRandomId(15));
            return element;
        }
    }
    build() {
        let element = this.buildElement(this.idElement);
        this.instanceElement = element;
        //Seteamos clases del elemento principal
        element.setAttribute("class", "d-none toast a-items-center " + this.backgroundColor);
        if (this.itemLeftCustom) {
            this.itemLeft = this.stringToHTML(this.itemLeftCustom);
            element.append(this.itemLeft);
        }
        if (this.icon) {
            let icon = document.createElement("i");
            icon.setAttribute("class", this.icon);
            element.append(icon);
        }
        if (!this.color) {
            this.color = "c-white";
        }
        if (this.description || this.title) {
            let textContainer = document.createElement("div");
            textContainer.setAttribute("class", "f-grow-1 m-y-m");
            if (this.title) {
                let title = document.createElement("h3");
                title.textContent = this.title;
                title.setAttribute("class", "typography-h3 t-truncate-clamp t-line-clamp-1 " + this.color);
                textContainer.append(title);
            }
            if (this.description) {
                let description = document.createElement("p");
                description.textContent = this.description;
                description.setAttribute("class", "typography-p t-truncate-clamp t-line-clamp-2 " + this.color);
                textContainer.append(description);
            }
            element.append(textContainer);
        }
        if (this.itemRightCustom) {
            this.itemRight = this.stringToHTML(this.itemRightCustom);
            element.append(this.itemRight);
        }
        else {
            let itemRightContainer = document.createElement("div");
            itemRightContainer.setAttribute("class", "m-x-m");
            itemRightContainer.addEventListener("click", () => {
                this.closeToast();
            });
            itemRightContainer.innerHTML = '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#000" stroke-width="1" >'
                + '<polyline points="8,6 12,2 16,6" opacity=".05" style="animation: slideUp 2s infinite"></polyline>'
                + '<polyline points="8,14 12,10 16,14" opacity=".05" style="animation:slideUp 2s infinite 1s"></polyline>'
                + '<polyline points="8,22 12,18 16,22" style="animation:slideUp 2s infinite .5s" opacity=".05"></polyline>'
                + '</svg>';
            element.append(itemRightContainer);
        }
        let container = this.buildElement(this.container);
        this.instanceContainer = container;
        if (!document.getElementById(this.idElement)) {
            this.idElement = element.id;
            container.append(element);
            if (!document.getElementById(this.container)) {
                container.setAttribute("class", "p-fixed toast-container");
                this.setContainer(container);
                this.container = container.id;
                document.body.append(container);
            }
        }
    }
    stringToHTML(str) {
        const parser = new DOMParser(), doc = parser.parseFromString(str, 'text/html');
        return doc.body.childNodes[0];
    }
    setContainer(container) {
        let widthContainer = this.position.width ? this.position.width + "" : "100%";
        let styleSet = "width:" + widthContainer + ";";
        styleSet += this.position.top ? " top:" + this.position.top + ";" : "";
        styleSet += this.position.bottom ? " bottom:" + this.position.bottom + ";" : "";
        styleSet += this.position.left ? " left:" + this.position.left + ";" : "";
        styleSet += this.position.right ? " right:" + this.position.right + ";" : "";
        if (!this.position.top && !this.position.bottom && !this.position.left && !this.position.right) {
            styleSet += " top: 0;";
        }
        container.setAttribute("style", styleSet);
    }
    show() {
        let element = this.instanceElement;
        element.classList.remove("d-none");
        element.setAttribute("style", "animation: " + this.animationIn + ", fadeIncreaseOpacity; animation-duration: " + this.timeIn + "s, " + this.timeIn + "s;");
        element.classList.add("d-flex", "a-items-top");
        setTimeout(() => {
            element.removeAttribute("style");
        }, this.timeIn * 1000);
    }
    closeToast() {
        let element = this.instanceElement;
        element.setAttribute("style", "animation: " + this.animationOut + ", fadeDecreaseOpacity, fadeFlexToNone; animation-duration: " + this.timeOut + "s, " + this.timeOut + "s, " + this.timeOut + "s; animation-direction: reverse, normal, normal;");
        let _this = this;
        setTimeout(() => {
            element.classList.add("d-none");
            element.remove();
            if (document.getElementById(this.container)) {
                _this.instanceContainer.remove();
            }
        }, (_this.timeOut * 1000));
    }
    autoCloseFunction() {
        let _this = this;
        if (this.autoClose) {
            setTimeout(() => {
                _this.closeToast();
            }, this.timeAutoClose * 1000);
        }
    }
}

"use strict";
class Tooltip {
    constructor(options) {
        this.options = options;
        this.settings = {
            idElement: null,
            idElementReference: null,
            elementZIndex: 999,
            elementHTML: null,
            elementReferenceHTML: null,
            closeElementHTML: null,
            tabClose: false,
            clickClose: false,
            timeToClose: 10000,
            closeOnTime: false,
            closeBtn: true,
            onClickFunction: ' ',
            tabCallback: () => { return undefined; },
            closeBtnCallback: () => { return undefined; },
            beforeOpen: () => { return undefined; },
            backgroundColor: "--c-neutral-extrahigh",
            closeBtnClass: "c-white",
            closeBtnStyle: "",
            radius: '4px',
            contentHTML: "",
            direction: "left",
            indicatorPositionArrow: "50%",
            indicatorPositionElementReference: "50%",
            animationIn: 'fade-in-top',
            animationOut: 'fade-out-top',
            animationTime: .5,
            animationDelay: 0,
            classElement: ' ',
            x: '0',
            y: '0',
            width: 'absolute',
            _calcXPos: null,
            _calcYPos: null,
            _statusDisplay: false,
        };
        this.init = () => {
            this.initConfig();
            this.prepareView();
        };
        this.initConfig = () => {
            let elementReference = document.querySelector(`#${this.settings.idElementReference}`);
            if (elementReference) {
                this.settings.elementReferenceHTML = elementReference;
            }
            else {
                console.error("No existe un elemento al cual referenciar");
            }
            if (this.settings.elementReferenceHTML && this.settings.width && this.settings.indicatorPositionElementReference) {
                let positionElementReferencePercent = (100 / parseInt(this.settings.indicatorPositionElementReference));
                switch (this.settings.direction) {
                    case "right":
                        this.xSet((-4 - parseInt(this.settings.width)) + "");
                        this.ySet((this.settings.elementReferenceHTML.offsetHeight / positionElementReferencePercent) + "");
                        break;
                    case "left":
                        this.xSet((this.settings.elementReferenceHTML.offsetWidth + 24) + "");
                        this.ySet((this.settings.elementReferenceHTML.offsetHeight / positionElementReferencePercent) + "");
                        break;
                    case "top":
                        this.xSet((this.settings.elementReferenceHTML.offsetWidth / positionElementReferencePercent) + "");
                        this.ySet((this.settings.elementReferenceHTML.offsetHeight + 12) + "");
                        break;
                    case "bottom":
                        this.xSet((this.settings.elementReferenceHTML.offsetWidth / positionElementReferencePercent) + "");
                        this.ySet((-12) + "");
                        break;
                    default:
                        console.error("No posee una dirección del tooltip valida, valores aceptados right, left, top, bottom");
                }
            }
        };
        this.buildElement = (idElement) => {
            var _a;
            if (idElement) {
                let element = document.querySelector(`#${idElement}`);
                if (element) {
                    (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
                }
                element = document.createElement("div");
                element.setAttribute("id", idElement);
                return element;
            }
            else {
                const element = document.createElement("div");
                let idElementRandom = BLUEUtils.makeRandomId(15);
                element.setAttribute("id", idElementRandom);
                this.settings.idElement = idElementRandom;
                return element;
            }
        };
        this.prepareView = () => {
            var _a;
            this.settings.elementHTML = this.buildElement(this.settings.idElement);
            this.settings.elementHTML.setAttribute("onclick", this.settings.onClickFunction + '');
            this.settings.elementHTML.setAttribute("class", this.settings.classElement + " tooltip tooltip--" + this.settings.direction);
            this.settings.elementHTML.setAttribute("style", " --width: " + this.settings.width + "; --xPos: " +
                this.settings._calcXPos + "px; --yPos: " + this.settings._calcYPos + "px; --radius: " +
                this.settings.radius + "; --background: var(" + this.settings.backgroundColor + "); --indicator-position-arrow: " +
                this.settings.indicatorPositionArrow + "; --indicator-position-element-reference: " +
                this.settings.indicatorPositionElementReference + "; --zIndex: " + this.settings.elementZIndex + "; --anim-name-in: " +
                this.settings.animationIn + "; --anim-name-out: " + this.settings.animationOut + "; --anim-time: " +
                this.settings.animationTime + "s; --anim-delay: " + this.settings.animationDelay + "s;");
            let containerContentHtml = document.createElement("div");
            if (this.settings.closeBtn) {
                containerContentHtml.setAttribute("class", "p-l");
            }
            else {
                containerContentHtml.setAttribute("class", "p-m");
            }
            if (this.settings.contentHTML instanceof HTMLElement) {
                containerContentHtml.appendChild(this.settings.contentHTML);
            }
            else {
                containerContentHtml.insertAdjacentHTML('beforeend', this.settings.contentHTML);
            }
            this.settings.elementHTML.append(containerContentHtml);
            if (this.settings.closeBtn) {
                this.settings.closeElementHTML = document.createElement("button");
                this.settings.closeElementHTML.setAttribute("onclick", "return false;");
                this.settings.closeElementHTML.setAttribute("id", this.settings.idElement + "CloseBtn");
                this.settings.closeElementHTML.setAttribute("class", "tooltip__close-btn p-right-m p-top-m p-left-reset cursor-pointer");
                this.settings.closeElementHTML.addEventListener("click", (event) => {
                    this.close(event);
                });
                let iconClose = document.createElement("i");
                iconClose.setAttribute("class", this.settings.closeBtnClass + " icons x-block-after icons-after-s");
                this.settings.closeElementHTML.setAttribute("style", this.settings.closeBtnStyle);
                this.settings.closeElementHTML.append(iconClose);
                this.settings.elementHTML.append(this.settings.closeElementHTML);
            }
            if (this.settings.tabClose) {
                this.settings.elementHTML.addEventListener("keyup", (event) => {
                    if (event.key == "Tab") {
                        this.closeTab(event);
                    }
                });
            }
            if (this.settings.clickClose) {
                this.settings.elementHTML.addEventListener("click", (event) => {
                    this.closeTab(event);
                });
            }
            this.refreshPosition();
            let elementReferenceParent = (_a = document.querySelector(`#${this.settings.idElementReference}`)) === null || _a === void 0 ? void 0 : _a.parentNode;
            if (elementReferenceParent) {
                elementReferenceParent.append(this.settings.elementHTML);
            }
            else {
                console.error("No se puede agregar el tooltip sin elemento de referencia padre");
            }
        };
        this.refreshPosition = () => {
            var _a, _b, _c, _d, _e, _f;
            let positionArrowPerCentual = 2;
            let positionElementReferencePerCentual = 2;
            // Indicador de porcentaje del posicionamiento del arrow
            if (this.settings.indicatorPositionArrow != ((_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.style.getPropertyValue('--indicator-position-arrow')) && ((_b = this.settings.elementHTML) === null || _b === void 0 ? void 0 : _b.style.getPropertyValue('--indicator-position-arrow')) != undefined) {
                this.indicatorPositionArrowFunction((_c = this.settings.elementHTML) === null || _c === void 0 ? void 0 : _c.style.getPropertyValue('--indicator-position-arrow'));
            }
            if (this.settings.indicatorPositionArrow) {
                positionArrowPerCentual = (100 / parseInt(this.settings.indicatorPositionArrow));
            }
            //Indicador de posición del arrow con respecto al elemento de referencia
            if (this.settings.indicatorPositionElementReference != ((_d = this.settings.elementHTML) === null || _d === void 0 ? void 0 : _d.style.getPropertyValue('--indicator-position-element-reference')) && ((_e = this.settings.elementHTML) === null || _e === void 0 ? void 0 : _e.style.getPropertyValue('--indicator-position-element-reference')) != undefined) {
                this.indicatorPositionElementReferenceFunction((_f = this.settings.elementHTML) === null || _f === void 0 ? void 0 : _f.style.getPropertyValue('--indicator-position-element-reference'));
            }
            if (this.settings.indicatorPositionElementReference) {
                positionElementReferencePerCentual = (100 / parseInt(this.settings.indicatorPositionElementReference));
            }
            if (this.settings.elementReferenceHTML && this.settings.elementHTML && (this.settings.direction == 'left' || this.settings.direction == 'right')) {
                this.ySet((this.settings.elementReferenceHTML.offsetHeight / positionElementReferencePerCentual) + "");
                this.settings._calcYPos = 'calc( ' + this.settings.y + 'px - ' + (this.settings.elementHTML.offsetHeight / positionArrowPerCentual) + 'px )';
                this._calcYPosFunction(this.settings._calcYPos);
                this.settings._calcXPos = 'calc( ' + this.settings.x + 'px )';
                this._calcXPosFunction(this.settings._calcXPos);
            }
            else if (this.settings.elementReferenceHTML && this.settings.elementHTML && (this.settings.direction == 'top' || this.settings.direction == 'bottom')) {
                this.xSet((this.settings.elementReferenceHTML.offsetWidth / positionElementReferencePerCentual) + "");
                this.settings._calcXPos = 'calc( ' + this.settings.x + 'px - ' + (this.settings.elementHTML.offsetWidth / positionArrowPerCentual) + 'px )';
                this._calcXPosFunction(this.settings._calcXPos);
                if (this.settings.direction == 'bottom') {
                    this.settings._calcYPos = 'calc( ' + this.settings.y + 'px - ' + this.settings.elementHTML.offsetHeight + 'px )';
                }
                else {
                    this.settings._calcYPos = 'calc( ' + this.settings.y + 'px )';
                }
                this._calcYPosFunction(this.settings._calcYPos);
            }
        };
        this.beforeOpenFunction = (property) => {
            if (property !== undefined) {
                if (typeof property == 'function') {
                    this.settings.beforeOpen = property;
                }
            }
            else {
                if (typeof this.settings.beforeOpen == 'function') {
                    this.settings.beforeOpen.call(this);
                }
            }
        };
        this._calcXPosFunction = (property) => {
            var _a;
            (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--xPos", property);
        };
        this._calcYPosFunction = (property) => {
            var _a;
            (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--yPos", property);
        };
        this.open = () => {
            var _a, _b, _c, _d;
            this.beforeOpenFunction(undefined);
            (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.classList.remove('tooltip--animation-in', 'tooltip--animation-out');
            (_b = this.settings.elementHTML) === null || _b === void 0 ? void 0 : _b.classList.add('d-flex', 'tooltip--animation-in');
            this.refreshPosition();
            (_c = this.settings.elementHTML) === null || _c === void 0 ? void 0 : _c.classList.add('v-visible');
            if (this.settings.closeOnTime) {
                const pluginThis = this;
                setTimeout(function () {
                    pluginThis.closeOnTimeCallback();
                }, pluginThis.settings.timeToClose);
            }
            this.settings._statusDisplay = true;
            (_d = this.settings.elementReferenceHTML) === null || _d === void 0 ? void 0 : _d.focus();
        };
        this.close = (e) => {
            if (e) {
                e.stopPropagation();
            }
            const pluginThis = this;
            let promise = () => {
                pluginThis.closeAnimation();
                return new Promise((resolve, reject) => {
                    pluginThis.closeBtnCallbackFunction();
                    pluginThis.settings._statusDisplay = false;
                });
            };
            promise();
        };
        this.closeTab = (e) => {
            e.stopPropagation();
            const pluginThis = this;
            let promise = () => {
                pluginThis.closeAnimation();
                return new Promise((resolve, reject) => {
                    pluginThis.tabCallbackFuntion();
                    pluginThis.settings._statusDisplay = false;
                });
            };
            promise();
        };
        this.closeAnimation = () => {
            var _a, _b;
            const pluginThis = this;
            (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.classList.remove('tooltip--animation-in');
            (_b = this.settings.elementHTML) === null || _b === void 0 ? void 0 : _b.classList.add('tooltip--animation-out');
            if (this.settings.animationTime && this.settings.animationDelay) {
                setTimeout(function () {
                    var _a;
                    (_a = pluginThis.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.classList.remove('tooltip--animation-out', 'v-visible', 'd-flex');
                }, (this.settings.animationTime + this.settings.animationDelay + .05) * 1000);
            }
        };
        this.closeBtnCallbackFunction = (property) => {
            if (property !== undefined) {
                if (typeof property == 'function') {
                    this.settings.closeBtnCallback = property;
                }
            }
            else {
                if (typeof this.settings.closeBtnCallback == 'function') {
                    this.settings.closeBtnCallback.call(this);
                }
            }
        };
        this.tabCallbackFuntion = (property) => {
            if (property !== undefined) {
                if (typeof property == 'function') {
                    this.settings.tabCallback = property;
                }
            }
            else {
                if (typeof this.settings.tabCallback == 'function') {
                    this.settings.tabCallback.call(this);
                }
            }
        };
        this.elementZIndexFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.settings.elementZIndex = property;
                (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--zIndex", "" + this.settings.elementZIndex);
            }
            else {
                return this.settings.elementZIndex;
            }
        };
        this.tabCloseFunction = (property) => {
            if (property !== undefined) {
                this.settings.tabClose = property;
            }
            else {
                return this.settings.tabClose;
            }
        };
        this.timeToCloseFunction = (property) => {
            if (property !== undefined) {
                this.settings.timeToClose = property;
            }
            else {
                return this.settings.timeToClose;
            }
        };
        this.closeOnTimeFunction = (property) => {
            if (property !== undefined) {
                this.settings.closeOnTime = property;
            }
            else {
                return this.settings.closeOnTime;
            }
        };
        this.closeOnTimeCallback = () => {
            const pluginThis = this;
            if (this.settings._statusDisplay) {
                let mypromise = function functionOne() {
                    pluginThis.closeAnimation();
                    return new Promise((resolve, reject) => {
                        pluginThis.closeBtnCallbackFunction();
                    });
                };
                mypromise();
            }
        };
        this.closeBtnEvent = (property) => {
            var _a, _b, _c, _d;
            if (property !== undefined) {
                if (property && !this.settings.closeBtn) {
                    this.settings.closeElementHTML = document.createElement("button");
                    this.settings.closeElementHTML.setAttribute("id", this.settings.idElement + "CloseBtn");
                    this.settings.closeElementHTML.setAttribute("class", "tooltip__close-btn");
                    let iconClose = document.createElement("i");
                    iconClose.setAttribute("class", this.settings.closeBtnClass);
                    this.settings.closeElementHTML.append(iconClose);
                    (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.prepend(this.settings.closeElementHTML);
                }
                else if (!property && property != this.settings.closeBtn) {
                    (_b = this.settings.elementHTML) === null || _b === void 0 ? void 0 : _b.classList.remove('tooltip--close');
                    (_d = (_c = this.settings.closeElementHTML) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.removeChild(this.settings.closeElementHTML);
                }
                this.settings.closeBtn = property;
            }
            else {
                return this.settings.closeBtn;
            }
        };
        this.background = (property) => {
            var _a;
            if (property !== undefined) {
                this.settings.backgroundColor = property;
                (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--background", this.settings.backgroundColor);
            }
            else {
                return this.settings.backgroundColor;
            }
        };
        this.closeBtnClassFunction = (property) => {
            var _a, _b, _c, _d;
            if (property !== undefined) {
                (_b = (_a = this.settings.closeElementHTML) === null || _a === void 0 ? void 0 : _a.children.namedItem('i')) === null || _b === void 0 ? void 0 : _b.classList.remove(this.settings.closeBtnClass);
                this.settings.closeBtnClass = property;
                (_d = (_c = this.settings.closeElementHTML) === null || _c === void 0 ? void 0 : _c.children.namedItem('i')) === null || _d === void 0 ? void 0 : _d.classList.add(this.settings.closeBtnClass);
            }
            else {
                return this.settings.closeBtnClass;
            }
        };
        this.radiusFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.settings.radius = property;
                (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--radius", this.settings.radius);
            }
            else {
                return this.settings.radius;
            }
        };
        this.contentHTMLFunction = (property) => {
            var _a, _b, _c;
            if (property !== undefined) {
                this.settings.contentHTML = property;
                if (this.settings.closeBtn && this.settings.closeElementHTML) {
                    (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.append(this.settings.closeElementHTML);
                    (_b = this.settings.elementHTML) === null || _b === void 0 ? void 0 : _b.append(this.settings.contentHTML);
                }
                else {
                    (_c = this.settings.elementHTML) === null || _c === void 0 ? void 0 : _c.append(this.settings.contentHTML);
                }
            }
            else {
                return this.settings.contentHTML;
            }
        };
        this.directionFunction = (property) => {
            var _a, _b;
            if (property !== undefined) {
                (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.classList.remove('tooltip--' + this.settings.direction);
                this.settings.direction = property;
                (_b = this.settings.elementHTML) === null || _b === void 0 ? void 0 : _b.classList.add('tooltip--' + this.settings.direction);
            }
            else {
                return this.settings.direction;
            }
        };
        this.indicatorPositionArrowFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.settings.indicatorPositionArrow = property;
                (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--indicator-position-arrow", this.settings.indicatorPositionArrow);
            }
            else {
                return this.settings.indicatorPositionArrow;
            }
        };
        this.indicatorPositionElementReferenceFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.settings.indicatorPositionElementReference = property;
                (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--indicator-position-element-reference", this.settings.indicatorPositionElementReference);
            }
            else {
                return this.settings.indicatorPositionElementReference;
            }
        };
        this.animationInFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.settings.animationIn = property;
                (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--animationIn", this.settings.animationIn);
            }
            else {
                return this.settings.animationIn;
            }
        };
        this.animationOutFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.settings.animationOut = property;
                (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--animationOut", this.settings.animationOut);
            }
            else {
                return this.settings.animationOut;
            }
        };
        this.classElementFunction = (property) => {
            var _a, _b;
            if (property !== undefined && this.settings.classElement) {
                (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.classList.remove(this.settings.classElement);
                this.settings.classElement = property;
                (_b = this.settings.elementHTML) === null || _b === void 0 ? void 0 : _b.classList.add(this.settings.classElement);
            }
            else {
                return this.settings.classElement;
            }
        };
        this.xSet = (property) => {
            if (property !== undefined) {
                this.settings.x = property;
                this._calcXPosFunction(this.settings.x);
            }
            else {
                return this.settings.x;
            }
        };
        this.ySet = (property) => {
            if (property !== undefined) {
                this.settings.y = property;
                this._calcYPosFunction(this.settings.y);
            }
            else {
                return this.settings.y;
            }
        };
        this.widthFunction = (property) => {
            var _a;
            if (property !== undefined) {
                this.settings.width = property;
                (_a = this.settings.elementHTML) === null || _a === void 0 ? void 0 : _a.style.setProperty("--width", this.settings.width);
            }
            else {
                return this.settings.width;
            }
        };
        this.settings = Object.assign(Object.assign({}, this.settings), options);
        this.init();
    }
}
//  Fin del Plugin

"use strict";
class AuthenticationMethod extends Multilanguage {
    constructor(settings, securityValidator) {
        super(settings.lang);
        this.rootElement = document.querySelector(settings.rootQuerySelector);
        this.settings = settings;
        this.securityValidator = securityValidator;
    }
}

"use strict";
class BackendAccess {
    constructor(sendOTPCallback, validateOTPCallback, sendDFACallback, validateCBACCallback) {
        this.sendOTPCallback = sendOTPCallback;
        this.validateOTPCallback = validateOTPCallback;
        this.sendDFACallback = sendDFACallback;
        this.validateDFACallback = validateCBACCallback;
    }
    sendOTP(userId, country) {
        this.sendOTPCallback();
    }
    validateOTP(otpCode) {
        this.validateOTPCallback();
    }
    sendDFA(userId, country) {
        this.sendDFACallback();
    }
    validateDFA(dfaCode) {
        this.validateDFACallback();
    }
}

"use strict";
class CBAC extends AuthenticationMethod {
    constructor() {
        super(...arguments);
        this.contadorIntentos = 0;
        this.maxIntentos = 3;
    }
    show() {
        this.showValidate();
    }
    validate() {
        var _a;
        this.contadorIntentos++;
        (_a = document.querySelector("#loadingContainer")) === null || _a === void 0 ? void 0 : _a.classList.remove("d-none");
        // Llamado al adapter de validacion
        this.settings.backendAccess.validateDFA(this.cbacInput.val());
    }
    destroy() {
        var _a;
        this.rootElement.innerHTML = '';
        (_a = document.getElementById(`footer${this.settings.rootQuerySelector}`)) === null || _a === void 0 ? void 0 : _a.remove();
    }
    processResult(response) {
        this.handleCbacValidationResponse(response.result);
    }
    showValidate() {
        var _a, _b, _c;
        this.destroy();
        this.contadorIntentos = 0;
        this.rootElement.innerHTML =
            `<div class="col-12 d-flex j-content-center">
            <svg id="valideCBAC" width="40" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" fill="white"/><path d="M18.6407 14.5605H5.92072" stroke="black" stroke-width="1.34856"/><path d="M22.3208 14.72C22.2408 14.64 22.1608 14.56 21.9208 14.56H18.4808V10.48C18.4808 6.96 15.5208 4 12.0008 4C8.48077 4 5.52077 6.96 5.52077 10.48V14.56H2.16077C1.92077 14.56 1.84077 14.64 1.76077 14.72C1.68077 14.8 1.60077 14.88 1.60077 15.12V30.96C1.60077 31.2 1.68077 31.28 1.76077 31.36C1.84077 31.44 1.92077 31.52 2.16077 31.52H7.68077C7.36077 30.64 7.20077 28.16 7.44077 27.12C8.08077 23.68 10.3208 21.68 13.4408 21.44H22.4008L22.4808 15.2C22.4808 14.88 22.4008 14.8 22.3208 14.72Z" stroke="black" stroke-width="1.34856"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.0414 20.6396H13.8414C9.84142 20.6396 6.64142 23.8396 6.64142 27.8396V29.2796C6.64142 30.5596 7.12142 32.5596 7.92142 33.6796C9.12142 35.5196 11.0414 36.6396 13.4414 36.6396H31.2814C35.3614 36.6396 38.6414 33.3596 38.6414 29.2796V28.1596C38.5614 23.9996 35.2014 20.6396 31.0414 20.6396ZM31.6814 35.1996H13.3614C11.2814 35.1996 9.44142 33.6796 8.56142 31.5196C8.24142 30.6396 8.00142 29.6796 8.00142 28.7196C8.00142 25.1196 10.4014 22.1596 13.2814 22.1596H31.6014C34.4814 22.1596 36.8814 25.0396 36.8814 28.7196C36.9614 32.2396 34.5614 35.1996 31.6814 35.1996Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0812 28.0002L16.3212 28.8802L17.6812 30.6402C17.8412 30.8802 17.7612 31.2802 17.6012 31.4402C17.5212 31.5202 17.3612 31.5202 17.2812 31.5202C17.1212 31.5202 16.9612 31.4402 16.8012 31.2802L15.5212 29.5202L14.1612 31.3602C14.0012 31.5202 13.8412 31.6002 13.6012 31.6002C13.5212 31.6002 13.3612 31.5202 13.2812 31.5202C13.0412 31.3602 12.9612 30.9602 13.2012 30.7202L14.5612 28.9602L12.8012 28.0802C12.4812 27.9202 12.4012 27.5202 12.4812 27.2802C12.5612 26.9602 12.9612 26.8802 13.2812 27.0402L14.8012 27.8402V25.7602C14.8012 25.4402 15.0412 25.2002 15.3612 25.2002C15.6812 25.2002 15.9212 25.4402 15.9212 25.7602V27.7602L17.4412 26.9602C17.7612 26.8802 18.0812 26.9602 18.2412 27.2002C18.4812 27.4402 18.4012 27.8402 18.0812 28.0002Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.2005 28.0002L23.4405 28.8802L24.8005 30.6402C24.9605 30.8802 24.8805 31.2802 24.7205 31.4402C24.6405 31.5202 24.4805 31.5202 24.4005 31.5202C24.2405 31.5202 24.0805 31.4402 23.9205 31.2802L22.5605 29.6802L21.2805 31.3602C21.2005 31.5202 20.9605 31.6002 20.8005 31.6002C20.7205 31.6002 20.5605 31.5202 20.4805 31.5202C20.2405 31.3602 20.1605 30.9602 20.4005 30.7202L21.7605 28.9602L20.0005 28.0802C19.6805 28.0002 19.6005 27.6002 19.7605 27.2802C19.8405 26.9602 20.2405 26.8802 20.5605 27.0402L22.0805 27.8402V25.7602C22.0805 25.4402 22.3205 25.2002 22.6405 25.2002C22.9605 25.2002 23.2005 25.4402 23.2005 25.7602V27.7602L24.7205 26.9602C25.0405 26.8802 25.3605 26.9602 25.5205 27.2002C25.6005 27.4402 25.5205 27.8402 25.2005 28.0002Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.3208 28.0002L30.5608 28.8802L31.9208 30.6402C32.0808 30.8802 32.0008 31.2802 31.8408 31.4402C31.7608 31.5202 31.6008 31.5202 31.5208 31.5202C31.3608 31.5202 31.2008 31.4402 31.0408 31.2802L29.7608 29.5202L28.4008 31.3602C28.3208 31.5202 28.0808 31.6002 27.9208 31.6002C27.8408 31.6002 27.6808 31.5202 27.6008 31.5202C27.3608 31.3602 27.2808 30.9602 27.5208 30.7202L28.8808 28.9602L27.1208 28.0802C26.8008 28.0002 26.7208 27.6002 26.8808 27.2802C26.9608 26.9602 27.3608 26.8802 27.6808 27.0402L29.2008 27.8402V25.7602C29.2008 25.4402 29.4408 25.2002 29.7608 25.2002C30.0808 25.2002 30.3208 25.4402 30.3208 25.7602V27.7602L31.8408 26.9602C32.1608 26.8802 32.4808 26.9602 32.6408 27.2002C32.7208 27.4402 32.6408 27.8402 32.3208 28.0002Z" fill="black"/</svg>
            <svg class="d-none" id="correctCBAC" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" fill="white"/><path d="M18.6407 14.5605H5.92068" stroke="black" stroke-width="1.34856"/><path d="M31.4602 14.56V10.48C31.4602 6.96 28.5002 4 24.9802 4C21.4602 4 18.5002 6.96 18.5002 10.48V14.56M18.5002 14.56L2.16077 14.5602C1.92077 14.5602 1.84077 14.6402 1.76077 14.7202C1.68077 14.8002 1.60077 14.8802 1.60077 15.1202V30.9602C1.60077 31.2002 1.68077 31.2802 1.76077 31.3602C1.84077 31.4402 1.92077 31.5202 2.16077 31.5202H7.68077C7.36077 30.6402 7.20077 28.1602 7.44077 27.1202C8.08077 23.6802 10.3208 21.6802 13.4408 21.4402H22.4008L22.4808 15.2002C22.4808 14.8802 22.4008 14.8002 22.3208 14.7202C22.2408 14.6402 22.1608 14.5602 21.9208 14.5602L18.5002 14.56Z" stroke="black" stroke-width="1.34856"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.0414 20.6396H13.8414C9.84139 20.6396 6.64139 23.8396 6.64139 27.8396V29.2796C6.64139 30.5596 7.12139 32.5596 7.92139 33.6796C9.12139 35.5196 11.0414 36.6396 13.4414 36.6396H31.2814C35.3614 36.6396 38.6414 33.3596 38.6414 29.2796V28.1596C38.5614 23.9996 35.2014 20.6396 31.0414 20.6396ZM31.6814 35.1996H13.3614C11.2814 35.1996 9.44139 33.6796 8.56139 31.5196C8.24139 30.6396 8.00139 29.6796 8.00139 28.7196C8.00139 25.1196 10.4014 22.1596 13.2814 22.1596H31.6014C34.4814 22.1596 36.8814 25.0396 36.8814 28.7196C36.9614 32.2396 34.5614 35.1996 31.6814 35.1996Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0812 28.0002L16.3212 28.8802L17.6812 30.6402C17.8412 30.8802 17.7612 31.2802 17.6012 31.4402C17.5212 31.5202 17.3612 31.5202 17.2812 31.5202C17.1212 31.5202 16.9612 31.4402 16.8012 31.2802L15.5212 29.5202L14.1612 31.3602C14.0012 31.5202 13.8412 31.6002 13.6012 31.6002C13.5212 31.6002 13.3612 31.5202 13.2812 31.5202C13.0412 31.3602 12.9612 30.9602 13.2012 30.7202L14.5612 28.9602L12.8012 28.0802C12.4812 27.9202 12.4012 27.5202 12.4812 27.2802C12.5612 26.9602 12.9612 26.8802 13.2812 27.0402L14.8012 27.8402V25.7602C14.8012 25.4402 15.0412 25.2002 15.3612 25.2002C15.6812 25.2002 15.9212 25.4402 15.9212 25.7602V27.7602L17.4412 26.9602C17.7612 26.8802 18.0812 26.9602 18.2412 27.2002C18.4812 27.4402 18.4012 27.8402 18.0812 28.0002Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.2005 28.0002L23.4405 28.8802L24.8005 30.6402C24.9605 30.8802 24.8805 31.2802 24.7205 31.4402C24.6405 31.5202 24.4805 31.5202 24.4005 31.5202C24.2405 31.5202 24.0805 31.4402 23.9205 31.2802L22.5605 29.6802L21.2805 31.3602C21.2005 31.5202 20.9604 31.6002 20.8004 31.6002C20.7204 31.6002 20.5605 31.5202 20.4805 31.5202C20.2405 31.3602 20.1604 30.9602 20.4004 30.7202L21.7605 28.9602L20.0004 28.0802C19.6804 28.0002 19.6005 27.6002 19.7605 27.2802C19.8405 26.9602 20.2405 26.8802 20.5605 27.0402L22.0805 27.8402V25.7602C22.0805 25.4402 22.3205 25.2002 22.6405 25.2002C22.9605 25.2002 23.2005 25.4402 23.2005 25.7602V27.7602L24.7205 26.9602C25.0405 26.8802 25.3605 26.9602 25.5205 27.2002C25.6005 27.4402 25.5205 27.8402 25.2005 28.0002Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.3208 28.0002L30.5608 28.8802L31.9208 30.6402C32.0808 30.8802 32.0008 31.2802 31.8408 31.4402C31.7608 31.5202 31.6008 31.5202 31.5208 31.5202C31.3608 31.5202 31.2008 31.4402 31.0408 31.2802L29.7608 29.5202L28.4008 31.3602C28.3208 31.5202 28.0808 31.6002 27.9208 31.6002C27.8408 31.6002 27.6808 31.5202 27.6008 31.5202C27.3608 31.3602 27.2808 30.9602 27.5208 30.7202L28.8808 28.9602L27.1208 28.0802C26.8008 28.0002 26.7208 27.6002 26.8808 27.2802C26.9608 26.9602 27.3608 26.8802 27.6808 27.0402L29.2008 27.8402V25.7602C29.2008 25.4402 29.4408 25.2002 29.7608 25.2002C30.0808 25.2002 30.3208 25.4402 30.3208 25.7602V27.7602L31.8408 26.9602C32.1608 26.8802 32.4808 26.9602 32.6408 27.2002C32.7208 27.4402 32.6408 27.8402 32.3208 28.0002Z" fill="black"/></svg>
            <!-- <img src="images/common/dfa-validate.svg">  -->
            <!-- <img class="d-none" src="images/common/dfa-validate-correct.svg">  -->
        </div>
        <div class="col-12 m-top-l">
            <h3 class="typography-h3 c-black t-align-center">${this.labels.titleCBAC}</h3>
        </div>
        <div class="col-6 offset-1 m-top-m" id="cbacInput">
        </div>
        <div class="col-12 m-top-l p-x-l">
            <h5 id="noAccessLink" class="typography-link t-align-center">${this.labels.linkNoAccess}</h5>
        </div>`;
        let footer = document.createElement("footer");
        footer.setAttribute("data-role", "footer");
        footer.setAttribute("id", `footer${this.settings.rootQuerySelector}`);
        footer.innerHTML =
            `<div class="grid-row m-bottom-l m-top-l">
                <div class="col-12 p-x-l">
                    <button type="button" disabled id="nextStepTempPassBtn" class="btn btn-primary">${this.labels.buttonContinueText}</button>
                </div>
            </div>`;
        (_a = document.querySelector("#securityvalidatorviewmodel")) === null || _a === void 0 ? void 0 : _a.append(footer);
        (_b = document.querySelector("#noAccessLink")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            this.destroy();
            this.securityValidator.switchAuthMethod();
        });
        (_c = document.querySelector("#nextStepTempPassBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            this.settings.successCallback();
        });
        var cbacMethod = this;
        this.cbacInput = new InputCode('#cbacInput', () => { cbacMethod.validate(); return true; }, 2, 3);
    }
    handleCbacValidationResponse(result) {
        var _a, _b, _c;
        //Si es invalida, validar cantidad de intentos
        if (!result) {
            if (this.contadorIntentos >= this.maxIntentos) {
                //Se llama el callback para controlar el maximo de intentos
                this.settings.maxRetryCallback();
            }
            else {
                this.cbacInput.clean();
                this.cbacInput.showError(this.labels.incorrectCBAC);
            }
        }
        else {
            (_a = document.querySelector("#valideCBAC")) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
            (_b = document.querySelector("#correctCBAC")) === null || _b === void 0 ? void 0 : _b.classList.remove("d-none");
            this.cbacInput.markAsSuccess();
            (_c = document.querySelector("#nextStepTempPassBtn")) === null || _c === void 0 ? void 0 : _c.removeAttribute("disabled");
        }
    }
}

"use strict";
class CBAC_SMS extends AuthenticationMethod {
    constructor() {
        super(...arguments);
        this.contadorReenvio = 0;
        this.contadorIntentos = 0;
        this.maxReenvio = 2;
        this.maxIntentos = 3;
        this.dfaStep = 'SEND';
    }
    show() {
        this.showValidate();
        // Llamado al adapter de envio de CBAC
        this.settings.backendAccess.sendDFA(this.settings.userInfo.userId, this.settings.userInfo.country);
    }
    validate() {
        var _a;
        this.contadorIntentos++;
        (_a = document.querySelector("#loadingContainer")) === null || _a === void 0 ? void 0 : _a.classList.remove("d-none");
        // Llamado al adapter de validacion
        this.settings.backendAccess.validateDFA(this.cbacInput.val());
    }
    destroy() {
        var _a;
        this.rootElement.innerHTML = '';
        (_a = document.getElementById(`footer${this.settings.rootQuerySelector}`)) === null || _a === void 0 ? void 0 : _a.remove();
    }
    processResult(response) {
        if (this.dfaStep === 'SEND') {
            this.showValidate();
            this.dfaStep = 'VALIDATE';
        }
        else if (this.dfaStep === 'VALIDATE') {
            this.handleCbacValidationResponse(response.result);
        }
    }
    showValidate() {
        var _a, _b, _c, _d;
        this.destroy();
        this.contadorIntentos = 0;
        this.rootElement.innerHTML =
            `<div class="col-12 d-flex j-content-center">
            <svg id="valideCBAC" width="40" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" fill="white"/><path d="M18.6407 14.5605H5.92072" stroke="black" stroke-width="1.34856"/><path d="M22.3208 14.72C22.2408 14.64 22.1608 14.56 21.9208 14.56H18.4808V10.48C18.4808 6.96 15.5208 4 12.0008 4C8.48077 4 5.52077 6.96 5.52077 10.48V14.56H2.16077C1.92077 14.56 1.84077 14.64 1.76077 14.72C1.68077 14.8 1.60077 14.88 1.60077 15.12V30.96C1.60077 31.2 1.68077 31.28 1.76077 31.36C1.84077 31.44 1.92077 31.52 2.16077 31.52H7.68077C7.36077 30.64 7.20077 28.16 7.44077 27.12C8.08077 23.68 10.3208 21.68 13.4408 21.44H22.4008L22.4808 15.2C22.4808 14.88 22.4008 14.8 22.3208 14.72Z" stroke="black" stroke-width="1.34856"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.0414 20.6396H13.8414C9.84142 20.6396 6.64142 23.8396 6.64142 27.8396V29.2796C6.64142 30.5596 7.12142 32.5596 7.92142 33.6796C9.12142 35.5196 11.0414 36.6396 13.4414 36.6396H31.2814C35.3614 36.6396 38.6414 33.3596 38.6414 29.2796V28.1596C38.5614 23.9996 35.2014 20.6396 31.0414 20.6396ZM31.6814 35.1996H13.3614C11.2814 35.1996 9.44142 33.6796 8.56142 31.5196C8.24142 30.6396 8.00142 29.6796 8.00142 28.7196C8.00142 25.1196 10.4014 22.1596 13.2814 22.1596H31.6014C34.4814 22.1596 36.8814 25.0396 36.8814 28.7196C36.9614 32.2396 34.5614 35.1996 31.6814 35.1996Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0812 28.0002L16.3212 28.8802L17.6812 30.6402C17.8412 30.8802 17.7612 31.2802 17.6012 31.4402C17.5212 31.5202 17.3612 31.5202 17.2812 31.5202C17.1212 31.5202 16.9612 31.4402 16.8012 31.2802L15.5212 29.5202L14.1612 31.3602C14.0012 31.5202 13.8412 31.6002 13.6012 31.6002C13.5212 31.6002 13.3612 31.5202 13.2812 31.5202C13.0412 31.3602 12.9612 30.9602 13.2012 30.7202L14.5612 28.9602L12.8012 28.0802C12.4812 27.9202 12.4012 27.5202 12.4812 27.2802C12.5612 26.9602 12.9612 26.8802 13.2812 27.0402L14.8012 27.8402V25.7602C14.8012 25.4402 15.0412 25.2002 15.3612 25.2002C15.6812 25.2002 15.9212 25.4402 15.9212 25.7602V27.7602L17.4412 26.9602C17.7612 26.8802 18.0812 26.9602 18.2412 27.2002C18.4812 27.4402 18.4012 27.8402 18.0812 28.0002Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.2005 28.0002L23.4405 28.8802L24.8005 30.6402C24.9605 30.8802 24.8805 31.2802 24.7205 31.4402C24.6405 31.5202 24.4805 31.5202 24.4005 31.5202C24.2405 31.5202 24.0805 31.4402 23.9205 31.2802L22.5605 29.6802L21.2805 31.3602C21.2005 31.5202 20.9605 31.6002 20.8005 31.6002C20.7205 31.6002 20.5605 31.5202 20.4805 31.5202C20.2405 31.3602 20.1605 30.9602 20.4005 30.7202L21.7605 28.9602L20.0005 28.0802C19.6805 28.0002 19.6005 27.6002 19.7605 27.2802C19.8405 26.9602 20.2405 26.8802 20.5605 27.0402L22.0805 27.8402V25.7602C22.0805 25.4402 22.3205 25.2002 22.6405 25.2002C22.9605 25.2002 23.2005 25.4402 23.2005 25.7602V27.7602L24.7205 26.9602C25.0405 26.8802 25.3605 26.9602 25.5205 27.2002C25.6005 27.4402 25.5205 27.8402 25.2005 28.0002Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.3208 28.0002L30.5608 28.8802L31.9208 30.6402C32.0808 30.8802 32.0008 31.2802 31.8408 31.4402C31.7608 31.5202 31.6008 31.5202 31.5208 31.5202C31.3608 31.5202 31.2008 31.4402 31.0408 31.2802L29.7608 29.5202L28.4008 31.3602C28.3208 31.5202 28.0808 31.6002 27.9208 31.6002C27.8408 31.6002 27.6808 31.5202 27.6008 31.5202C27.3608 31.3602 27.2808 30.9602 27.5208 30.7202L28.8808 28.9602L27.1208 28.0802C26.8008 28.0002 26.7208 27.6002 26.8808 27.2802C26.9608 26.9602 27.3608 26.8802 27.6808 27.0402L29.2008 27.8402V25.7602C29.2008 25.4402 29.4408 25.2002 29.7608 25.2002C30.0808 25.2002 30.3208 25.4402 30.3208 25.7602V27.7602L31.8408 26.9602C32.1608 26.8802 32.4808 26.9602 32.6408 27.2002C32.7208 27.4402 32.6408 27.8402 32.3208 28.0002Z" fill="black"/</svg>
            <svg class="d-none" id="correctCBAC" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" fill="white"/><path d="M18.6407 14.5605H5.92068" stroke="black" stroke-width="1.34856"/><path d="M31.4602 14.56V10.48C31.4602 6.96 28.5002 4 24.9802 4C21.4602 4 18.5002 6.96 18.5002 10.48V14.56M18.5002 14.56L2.16077 14.5602C1.92077 14.5602 1.84077 14.6402 1.76077 14.7202C1.68077 14.8002 1.60077 14.8802 1.60077 15.1202V30.9602C1.60077 31.2002 1.68077 31.2802 1.76077 31.3602C1.84077 31.4402 1.92077 31.5202 2.16077 31.5202H7.68077C7.36077 30.6402 7.20077 28.1602 7.44077 27.1202C8.08077 23.6802 10.3208 21.6802 13.4408 21.4402H22.4008L22.4808 15.2002C22.4808 14.8802 22.4008 14.8002 22.3208 14.7202C22.2408 14.6402 22.1608 14.5602 21.9208 14.5602L18.5002 14.56Z" stroke="black" stroke-width="1.34856"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.0414 20.6396H13.8414C9.84139 20.6396 6.64139 23.8396 6.64139 27.8396V29.2796C6.64139 30.5596 7.12139 32.5596 7.92139 33.6796C9.12139 35.5196 11.0414 36.6396 13.4414 36.6396H31.2814C35.3614 36.6396 38.6414 33.3596 38.6414 29.2796V28.1596C38.5614 23.9996 35.2014 20.6396 31.0414 20.6396ZM31.6814 35.1996H13.3614C11.2814 35.1996 9.44139 33.6796 8.56139 31.5196C8.24139 30.6396 8.00139 29.6796 8.00139 28.7196C8.00139 25.1196 10.4014 22.1596 13.2814 22.1596H31.6014C34.4814 22.1596 36.8814 25.0396 36.8814 28.7196C36.9614 32.2396 34.5614 35.1996 31.6814 35.1996Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0812 28.0002L16.3212 28.8802L17.6812 30.6402C17.8412 30.8802 17.7612 31.2802 17.6012 31.4402C17.5212 31.5202 17.3612 31.5202 17.2812 31.5202C17.1212 31.5202 16.9612 31.4402 16.8012 31.2802L15.5212 29.5202L14.1612 31.3602C14.0012 31.5202 13.8412 31.6002 13.6012 31.6002C13.5212 31.6002 13.3612 31.5202 13.2812 31.5202C13.0412 31.3602 12.9612 30.9602 13.2012 30.7202L14.5612 28.9602L12.8012 28.0802C12.4812 27.9202 12.4012 27.5202 12.4812 27.2802C12.5612 26.9602 12.9612 26.8802 13.2812 27.0402L14.8012 27.8402V25.7602C14.8012 25.4402 15.0412 25.2002 15.3612 25.2002C15.6812 25.2002 15.9212 25.4402 15.9212 25.7602V27.7602L17.4412 26.9602C17.7612 26.8802 18.0812 26.9602 18.2412 27.2002C18.4812 27.4402 18.4012 27.8402 18.0812 28.0002Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.2005 28.0002L23.4405 28.8802L24.8005 30.6402C24.9605 30.8802 24.8805 31.2802 24.7205 31.4402C24.6405 31.5202 24.4805 31.5202 24.4005 31.5202C24.2405 31.5202 24.0805 31.4402 23.9205 31.2802L22.5605 29.6802L21.2805 31.3602C21.2005 31.5202 20.9604 31.6002 20.8004 31.6002C20.7204 31.6002 20.5605 31.5202 20.4805 31.5202C20.2405 31.3602 20.1604 30.9602 20.4004 30.7202L21.7605 28.9602L20.0004 28.0802C19.6804 28.0002 19.6005 27.6002 19.7605 27.2802C19.8405 26.9602 20.2405 26.8802 20.5605 27.0402L22.0805 27.8402V25.7602C22.0805 25.4402 22.3205 25.2002 22.6405 25.2002C22.9605 25.2002 23.2005 25.4402 23.2005 25.7602V27.7602L24.7205 26.9602C25.0405 26.8802 25.3605 26.9602 25.5205 27.2002C25.6005 27.4402 25.5205 27.8402 25.2005 28.0002Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.3208 28.0002L30.5608 28.8802L31.9208 30.6402C32.0808 30.8802 32.0008 31.2802 31.8408 31.4402C31.7608 31.5202 31.6008 31.5202 31.5208 31.5202C31.3608 31.5202 31.2008 31.4402 31.0408 31.2802L29.7608 29.5202L28.4008 31.3602C28.3208 31.5202 28.0808 31.6002 27.9208 31.6002C27.8408 31.6002 27.6808 31.5202 27.6008 31.5202C27.3608 31.3602 27.2808 30.9602 27.5208 30.7202L28.8808 28.9602L27.1208 28.0802C26.8008 28.0002 26.7208 27.6002 26.8808 27.2802C26.9608 26.9602 27.3608 26.8802 27.6808 27.0402L29.2008 27.8402V25.7602C29.2008 25.4402 29.4408 25.2002 29.7608 25.2002C30.0808 25.2002 30.3208 25.4402 30.3208 25.7602V27.7602L31.8408 26.9602C32.1608 26.8802 32.4808 26.9602 32.6408 27.2002C32.7208 27.4402 32.6408 27.8402 32.3208 28.0002Z" fill="black"/></svg>
            <!-- <img src="images/common/dfa-validate.svg">  -->
            <!-- <img class="d-none" src="images/common/dfa-validate-correct.svg">  -->
        </div>
        <div class="col-12 m-top-l">
            <h3 class="typography-h3 c-black t-align-center">${this.labels.titleCBAC}</h3>
        </div>
        <div class="col-6 offset-1 m-top-m" id="cbacInput">
        </div>
        <div class="col-12 m-top-xxl p-x-l">
            <h5 class="typography-h5 c-neutral-high t-align-center">${this.labels.descriptionCBAC}<span class="f-weight-m">` + this.settings.userInfo.phoneNumber + `</span></h5>
        </div>
        <div class="col-12 m-top-xxl p-x-l">
            <h5 class="typography-h5 c-neutral-high t-align-center">${this.labels.footerCBAC}</h5>
        </div>
        <div class="col-12 m-top-xs m-bottom-xl p-x-l">
            <h5 id="resendLink" class="typography-link t-align-center">${this.labels.footerResendLink}</h5>
        </div>
        <div class="col-12 m-top-xl p-x-l">
            <h5 id="noAccessLink" class="typography-link t-align-center">${this.labels.linkNoAccess}</h5>
        </div>`;
        let footer = document.createElement("footer");
        footer.setAttribute("data-role", "footer");
        footer.setAttribute("id", `footer${this.settings.rootQuerySelector}`);
        footer.innerHTML =
            `<div class="grid-row m-bottom-l m-top-l">
                <div class="col-12 p-x-l">
                    <button type="button" disabled id="nextStepTempPassBtn" class="btn btn-primary">${this.labels.buttonContinueText}</button>
                </div>
            </div>`;
        (_a = document.querySelector("#securityvalidatorviewmodel")) === null || _a === void 0 ? void 0 : _a.append(footer);
        (_b = document.querySelector("#resendLink")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            this.resend();
        });
        (_c = document.querySelector("#noAccessLink")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            this.destroy();
            this.securityValidator.switchAuthMethod();
        });
        (_d = document.querySelector("#nextStepTempPassBtn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
            this.settings.successCallback();
        });
        var cbacMethod = this;
        this.cbacInput = new InputCode('#cbacInput', () => { cbacMethod.validate(); return true; }, 2, 3);
    }
    handleCbacValidationResponse(result) {
        var _a, _b, _c;
        //Si es invalida, validar cantidad de intentos
        if (!result) {
            if (this.contadorIntentos >= this.maxIntentos) {
                //Se llama el callback para controlar el maximo de intentos
                this.settings.maxRetryCallback();
            }
            else {
                this.cbacInput.clean();
                this.cbacInput.showError(this.labels.incorrectCBAC);
            }
        }
        else {
            (_a = document.querySelector("#valideCBAC")) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
            (_b = document.querySelector("#correctCBAC")) === null || _b === void 0 ? void 0 : _b.classList.remove("d-none");
            this.cbacInput.markAsSuccess();
            (_c = document.querySelector("#nextStepTempPassBtn")) === null || _c === void 0 ? void 0 : _c.removeAttribute("disabled");
        }
    }
    resend() {
        this.contadorReenvio++;
        if (this.contadorReenvio >= this.maxReenvio) {
            //Se llama el callback para controlar el maximo de reenvios
            this.settings.maxResendCBACSMSCallback();
        }
        else {
            this.dfaStep = 'SEND';
            this.settings.backendAccess.sendDFA(this.settings.userInfo.userId, this.settings.userInfo.country);
        }
    }
}

"use strict";
class SecurityValidator {
    constructor(settings) {
        switch (settings.userInfo.level) {
            case '0':
                this.authenticationMethod = new OTP(settings, this);
                break;
            case '10':
                this.authenticationMethod = new CBAC_SMS(settings, this);
                break;
            case '15':
                this.authenticationMethod = new CBAC(settings, this);
                break;
            case '20':
            case '30':
            case '40':
                this.authenticationMethod = new Token(settings, this);
                break;
            default:
                throw 'Nivel de seguridad no soportado';
        }
    }
    init() {
        this.authenticationMethod.show();
    }
    destroy() {
        this.authenticationMethod.destroy();
    }
    processResult(response) {
        this.authenticationMethod.processResult(response);
    }
    switchAuthMethod() {
        switch (this.authenticationMethod.settings.userInfo.level) {
            case '10':
            case '15':
                this.authenticationMethod = new OTP(this.authenticationMethod.settings, this);
                this.authenticationMethod.show();
                break;
            default:
                throw 'Cambio de nivel de seguridad no soportado';
        }
    }
}

"use strict";

"use strict";
class OTP extends AuthenticationMethod {
    constructor() {
        super(...arguments);
        this.contadorReenvio = 0;
        this.contadorIntentos = 0;
        this.maxReenvio = 2;
        this.maxIntentos = 3;
        this.otpStep = 'SEND';
    }
    show() {
        this.showGenerate();
    }
    validate() {
        var _a;
        this.contadorIntentos++;
        (_a = document.querySelector("#loadingContainer")) === null || _a === void 0 ? void 0 : _a.classList.remove("d-none");
        // Llamado al adapter de validacion
        this.settings.backendAccess.validateOTP(this.otpInput.val());
    }
    destroy() {
        var _a;
        this.rootElement.innerHTML = '';
        (_a = document.getElementById(`footer${this.settings.rootQuerySelector}`)) === null || _a === void 0 ? void 0 : _a.remove();
    }
    processResult(response) {
        if (this.otpStep === 'SEND') {
            this.showValidate();
            this.otpStep = 'VALIDATE';
        }
        else if (this.otpStep === 'VALIDATE') {
            this.handleOtpValidationResponse(response.result);
        }
    }
    showGenerate() {
        var _a, _b, _c;
        this.destroy();
        this.rootElement.innerHTML =
            `<div class="col-12 d-flex j-content-center">
            <!-- <img src="images/common/otp-generate-phone.svg">  -->
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.3442 13.8915L33.8904 8.86939L43.438 13.8915C43.3637 19.2756 42.2954 22.8304 40.7873 25.3599C39.2242 27.9818 37.1316 29.6012 34.9222 31.031L34.9203 31.0323L34.4767 31.3162L34.4748 31.3174C34.3275 31.4107 34.18 31.5033 34.0321 31.5957L34.031 31.5964L33.8904 31.6839L33.7498 31.5965L33.749 31.5959C33.6011 31.5035 33.4535 31.4108 33.3061 31.3174L33.3042 31.3162L32.8606 31.0323L32.8585 31.031C30.6495 29.6011 28.5573 27.9818 26.9945 25.3599C25.4866 22.8304 24.4185 19.2756 24.3442 13.8915ZM33.8903 7.7334L44.4475 13.2866C44.4475 24.9915 39.9836 28.9534 35.4665 31.8763L35.0148 32.1654C34.8642 32.2608 34.7138 32.3553 34.5637 32.4491L34.1142 32.7288L33.8903 32.8676L33.6665 32.7288L33.2171 32.4491C33.067 32.3553 32.9166 32.2608 32.7661 32.1654L32.3144 31.8763C27.798 28.9534 23.3347 24.9915 23.3347 13.2866L33.8903 7.7334ZM38.4768 17.8902C38.7603 17.5829 38.7603 17.0845 38.4768 16.7771C38.1935 16.4697 37.734 16.4697 37.4506 16.7771L33.0955 21.5012L31.2911 19.544C31.0078 19.2365 30.5483 19.2365 30.265 19.544C29.9815 19.8513 29.9815 20.3497 30.265 20.657L32.5824 23.1709C32.8659 23.4782 33.3252 23.4782 33.6087 23.1709L38.4768 17.8902Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8868 20.9556C14.8868 19.1868 16.3207 17.7529 18.0895 17.7529H23.9402V18.9129H18.0895C16.9614 18.9129 16.0468 19.8275 16.0468 20.9556V23.654H25.9576V24.814H16.0468V42.6686H33.2457V32.1021H34.4057V45.8713C34.4057 47.6401 32.9718 49.074 31.203 49.074H18.0895C16.3207 49.074 14.8868 47.6401 14.8868 45.8713V20.9556ZM33.2457 43.8286H16.0468V45.8713C16.0468 46.9994 16.9614 47.914 18.0895 47.914H31.203C32.3312 47.914 33.2457 46.9994 33.2457 45.8713V43.8286Z" fill="black"/></svg>
        </div>
        <div class="col-12 m-top-l">
            <h3 class="typography-h3 c-black t-align-center">${this.labels.titleSendOTP}</h3>
        </div>
        <div class="col-12 m-top-m p-x-l">
            <h4 class="typography-h4 c-neutral-extrahigh t-align-center f-weight-s">${this.settings.otpDeliveryMethodCode == '1' ? this.labels.descriptionSendOTPEmail : this.labels.descriptionSendOTPSMS}<span class="f-weight-m">${this.settings.otpDeliveryMethodCode == '1' ? this.settings.userInfo.email : this.settings.userInfo.phoneNumber}</span></h3>
        </div>`;
        let footer = document.createElement("footer");
        footer.setAttribute("data-role", "footer");
        footer.setAttribute("id", `footer${this.settings.rootQuerySelector}`);
        footer.innerHTML =
            `<div class="grid-row m-bottom-l m-top-l">
                <div class="col-12 m-bottom-m p-x-l">
                    <h5 class="typography-h5 c-neutral-extrahigh t-align-center">${this.settings.otpDeliveryMethodCode == '1' ? this.labels.footerSendOTPEmail : this.labels.footerSendOTPSMS}</h5>
                </div>
                <div class="col-12 m-top-l p-x-l">
                    <button type="button" id="sendCodeBtn" class="btn btn-primary">${this.labels.buttonSendOTPText}</button>
                </div>
            </div>`;
        (_a = document.querySelector("#securityvalidatorviewmodel")) === null || _a === void 0 ? void 0 : _a.append(footer);
        (_b = document.querySelector("#goWhatsAppLink")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            this.settings.whatsAppCallback();
        });
        (_c = document.querySelector("#sendCodeBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            this.settings.backendAccess.sendOTP(this.settings.userInfo.userId, this.settings.userInfo.country);
        });
    }
    showValidate() {
        var _a, _b, _c;
        this.destroy();
        this.contadorIntentos = 0;
        this.rootElement.innerHTML =
            `<div class="col-12 d-flex j-content-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1141_41107)"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5.91244C4 3.38356 6.05006 1.3335 8.57895 1.3335H23.4584C25.9873 1.3335 28.0374 3.38356 28.0374 5.91244V13.0353H35.9509C36.2881 13.0353 36.5614 13.3086 36.5614 13.6458V24.6353C36.5614 24.9724 36.2881 25.2458 35.9509 25.2458H28.0374V35.4212C28.0374 37.9501 25.9873 40.0002 23.4584 40.0002H8.57895C6.05007 40.0002 4 37.9501 4 35.4212V5.91244ZM27.0198 25.8825V31.8598H5.01754V8.96508H27.0198V13.0353H17.1213C16.7841 13.0353 16.5108 13.3086 16.5108 13.6458V24.6353C16.5108 24.9724 16.7841 25.2458 17.1213 25.2458H22.516V28.5781C22.516 29.1072 23.1432 29.3858 23.5358 29.031L27.0198 25.8825ZM27.0198 7.94753V5.91244C27.0198 3.94554 25.4253 2.35104 23.4584 2.35104H8.57895C6.61204 2.35104 5.01754 3.94553 5.01754 5.91244V7.94753H27.0198ZM5.01754 32.8774V35.4212C5.01754 37.3881 6.61204 38.9826 8.57895 38.9826H23.4584C25.4254 38.9826 27.0198 37.3881 27.0198 35.4212V32.8774H5.01754ZM17.5283 14.0528V24.2282H23.5335V27.6617L27.3328 24.2282H35.5439V14.0528H17.5283Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.6035 16.8511C21.744 16.8511 21.8579 16.965 21.8579 17.1055V18.6652L22.9887 17.9113C23.1056 17.8334 23.2635 17.865 23.3415 17.9819C23.4194 18.0988 23.3878 18.2567 23.2709 18.3347L22.0621 19.1405L23.2709 19.9464C23.3878 20.0244 23.4194 20.1823 23.3415 20.2992C23.2635 20.4161 23.1056 20.4477 22.9887 20.3698L21.8579 19.6159V21.1756C21.8579 21.3161 21.744 21.43 21.6035 21.43C21.463 21.43 21.3491 21.3161 21.3491 21.1756V19.6159L20.2183 20.3698C20.1014 20.4477 19.9434 20.4161 19.8655 20.2992C19.7876 20.1823 19.8192 20.0244 19.9361 19.9464L21.1449 19.1405L19.9361 18.3347C19.8192 18.2567 19.7876 18.0988 19.8655 17.9819C19.9434 17.865 20.1014 17.8334 20.2183 17.9113L21.3491 18.6652V17.1055C21.3491 16.965 21.463 16.8511 21.6035 16.8511Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.6913 16.8511C26.8318 16.8511 26.9457 16.965 26.9457 17.1055V18.6652L28.0765 17.9113C28.1934 17.8334 28.3513 17.865 28.4293 17.9819C28.5072 18.0988 28.4756 18.2567 28.3587 18.3347L27.1499 19.1405L28.3587 19.9464C28.4756 20.0244 28.5072 20.1823 28.4293 20.2992C28.3513 20.4161 28.1934 20.4477 28.0765 20.3698L26.9457 19.6159V21.1756C26.9457 21.3161 26.8318 21.43 26.6913 21.43C26.5508 21.43 26.4369 21.3161 26.4369 21.1756V19.6159L25.3061 20.3698C25.1892 20.4477 25.0312 20.4161 24.9533 20.2992C24.8754 20.1823 24.907 20.0244 25.0239 19.9464L26.2327 19.1405L25.0239 18.3347C24.907 18.2567 24.8754 18.0988 24.9533 17.9819C25.0312 17.865 25.1892 17.8334 25.3061 17.9113L26.4369 18.6652V17.1055C26.4369 16.965 26.5508 16.8511 26.6913 16.8511Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.7789 16.8511C31.9194 16.8511 32.0333 16.965 32.0333 17.1055V18.6652L33.1641 17.9113C33.281 17.8334 33.439 17.865 33.5169 17.9819C33.5948 18.0988 33.5632 18.2567 33.4464 18.3347L32.2375 19.1405L33.4464 19.9464C33.5632 20.0244 33.5948 20.1823 33.5169 20.2992C33.439 20.4161 33.281 20.4477 33.1641 20.3698L32.0333 19.6159V21.1756C32.0333 21.3161 31.9194 21.43 31.7789 21.43C31.6384 21.43 31.5245 21.3161 31.5245 21.1756V19.6159L30.3937 20.3698C30.2768 20.4477 30.1189 20.4161 30.041 20.2992C29.963 20.1823 29.9946 20.0244 30.1115 19.9464L31.3203 19.1405L30.1115 18.3347C29.9946 18.2567 29.963 18.0988 30.041 17.9819C30.1189 17.865 30.2768 17.8334 30.3937 17.9113L31.5245 18.6652V17.1055C31.5245 16.965 31.6384 16.8511 31.7789 16.8511Z" fill="black"/></g><defs><clipPath id="clip0_1141_41107"><rect width="40" height="40" fill="white"/></clipPath></defs></svg>
            <!-- <img src="images/common/otp-validate-phone.svg">  -->
        </div>
        <div class="col-12 m-top-l">
            <h3 class="typography-h3 c-black t-align-center">${this.labels.titleValidateOTP}</h3>
        </div>
        <div class="col-6 offset-1 m-top-m" id="otpInput">
        </div>
        <div class="col-12 m-top-xxl m-bottom-l p-x-l">
            <h5 class="typography-h5 c-neutral-high t-align-center">${this.settings.otpDeliveryMethodCode == '1' ? this.labels.descriptionValidateOTPEmail : this.labels.descriptionValidateOTPSMS}</h5>
        </div>
        <div class="col-12 m-top-l p-x-l">
            <h5 class="typography-h5 c-neutral-high t-align-center">${this.labels.footerValidateOTP}</h5>
        </div>
        <div class="col-12 m-top-xs p-x-l">
            <h5 id="resendLink" class="typography-link t-align-center">${this.settings.otpDeliveryMethodCode == '1' ? this.labels.footerResendLinkEmail : this.labels.footerResendLinkSMS}</h5>
        </div>`;
        let footer = document.createElement("footer");
        footer.setAttribute("data-role", "footer");
        footer.setAttribute("id", `footer${this.settings.rootQuerySelector}`);
        footer.innerHTML =
            `<div class="grid-row m-bottom-l m-top-l">
                <div class="col-12 p-x-l">
                    <button type="button" disabled id="nextStepTempPassBtn" class="btn btn-primary">${this.labels.buttonContinueText}</button>
                </div>
            </div>`;
        (_a = document.querySelector("#securityvalidatorviewmodel")) === null || _a === void 0 ? void 0 : _a.append(footer);
        (_b = document.querySelector("#resendLink")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            this.resend();
        });
        (_c = document.querySelector("#nextStepTempPassBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            this.settings.successCallback();
        });
        var otpMethod = this;
        this.otpInput = new InputCode('#otpInput', () => { otpMethod.validate(); return true; }, 2, 3);
    }
    handleOtpValidationResponse(result) {
        var _a;
        //Si es invalida, validar cantidad de intentos
        if (!result) {
            if (this.contadorIntentos >= this.maxIntentos) {
                //Se llama el callback para controlar el maximo de intentos
                this.settings.maxRetryCallback();
            }
            else {
                this.otpInput.clean();
                this.otpInput.showError(this.labels.incorrectOTP);
            }
        }
        else {
            this.otpInput.markAsSuccess();
            (_a = document.querySelector("#nextStepTempPassBtn")) === null || _a === void 0 ? void 0 : _a.removeAttribute("disabled");
        }
    }
    resend() {
        this.contadorReenvio++;
        if (this.contadorReenvio >= this.maxReenvio) {
            //Se llama el callback para controlar el maximo de reenvios
            this.settings.maxResendOTPCallback();
        }
        else {
            this.otpStep = 'SEND';
            this.settings.backendAccess.sendOTP(this.settings.userInfo.userId, this.settings.userInfo.country);
        }
    }
}

"use strict";
class Token extends AuthenticationMethod {
    constructor() {
        super(...arguments);
        this.contadorIntentos = 0;
        this.maxIntentos = 3;
    }
    show() {
        this.showValidate();
    }
    validate() {
        var _a;
        this.contadorIntentos++;
        (_a = document.querySelector("#loadingContainer")) === null || _a === void 0 ? void 0 : _a.classList.remove("d-none");
        // Llamado al adapter de validacion
        this.settings.backendAccess.validateDFA(this.tokenInput.val());
    }
    destroy() {
        var _a;
        this.rootElement.innerHTML = '';
        (_a = document.getElementById(`footer${this.settings.rootQuerySelector}`)) === null || _a === void 0 ? void 0 : _a.remove();
    }
    processResult(response) {
        this.handleTokenValidationResponse(response.result);
    }
    showValidate() {
        var _a, _b, _c;
        this.destroy();
        this.contadorIntentos = 0;
        this.rootElement.innerHTML =
            `<div class="col-12 d-flex j-content-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.93322 25.9386C7.32795 26.5449 6.91599 27.317 6.7494 28.1574C6.58281 28.9978 6.66907 29.8687 6.99727 30.6601C7.32547 31.4514 7.88088 32.1278 8.59333 32.6036C9.30578 33.0794 10.1433 33.3334 11 33.3334C11.8568 33.3334 12.6943 33.0794 13.4067 32.6036C14.1192 32.1278 14.6746 31.4514 15.0028 30.6601C15.331 29.8687 15.4172 28.9978 15.2506 28.1574C15.0841 27.317 14.6721 26.5449 14.0668 25.9386C13.6643 25.5354 13.1863 25.2155 12.6601 24.9973C12.1338 24.779 11.5697 24.6667 11 24.6667C10.4303 24.6667 9.86622 24.779 9.33998 24.9973C8.81375 25.2155 8.33571 25.5354 7.93322 25.9386ZM13.0974 31.1316C12.682 31.5475 12.1525 31.8308 11.576 31.9456C10.9995 32.0605 10.4019 32.0018 9.85871 31.777C9.31557 31.5521 8.85132 31.1713 8.52468 30.6825C8.19804 30.1938 8.0237 29.6192 8.0237 29.0313C8.0237 28.4435 8.19804 27.8689 8.52468 27.3801C8.85132 26.8914 9.31557 26.5105 9.85871 26.2857C10.4019 26.0608 10.9995 26.0022 11.576 26.117C12.1525 26.2319 12.682 26.5152 13.0974 26.931C13.6371 27.4867 13.939 28.2308 13.939 29.0054C13.939 29.78 13.6371 30.5241 13.0974 31.0797V31.1316Z" fill="black"/><path d="M25.7772 10.2091C25.7118 10.1429 25.634 10.0903 25.5482 10.0544C25.4624 10.0185 25.3703 10 25.2773 10C25.1843 10 25.0922 10.0185 25.0064 10.0544C24.9206 10.0903 24.8428 10.1429 24.7774 10.2091L14.8752 20.1148C14.8092 20.1797 14.7567 20.257 14.7209 20.3424C14.6851 20.4277 14.6667 20.5193 14.6667 20.6119C14.6667 20.7045 14.6851 20.7961 14.7209 20.8814C14.7567 20.9668 14.8092 21.0441 14.8752 21.109L18.8921 25.1272C18.9573 25.1926 19.0347 25.2444 19.12 25.2798C19.2052 25.3151 19.2966 25.3333 19.3889 25.3333C19.4812 25.3333 19.5726 25.3151 19.6579 25.2798C19.7432 25.2444 19.8206 25.1926 19.8858 25.1272L29.794 15.2155C29.8593 15.1503 29.9111 15.0728 29.9465 14.9875C29.9818 14.9022 30 14.8108 30 14.7185C30 14.6261 29.9818 14.5347 29.9465 14.4494C29.9111 14.3641 29.8593 14.2866 29.794 14.2214L25.7772 10.2091ZM19.3919 23.6152L16.3689 20.6387L25.2952 11.7093L28.3182 14.7215L19.3919 23.6152Z" fill="black"/><path d="M32.5664 2.9314C32.0591 3.44152 31.7388 4.10834 31.6574 4.82371C31.576 5.53908 31.7382 6.26103 32.1178 6.87243L31.1237 7.87439C29.3961 6.40485 27.0987 5.50613 24.1708 5.26323C23.7701 5.23827 23.3685 5.29719 22.9918 5.43624C22.615 5.57529 22.2713 5.79142 21.9825 6.07087L4.60349 23.4685C-3.36166 31.4538 8.77397 43.2405 16.5573 35.4434L33.9242 18.0458C34.2083 17.7599 34.4279 17.4163 34.568 17.0381C34.7082 16.6599 34.7656 16.256 34.7365 15.8536C34.494 12.9267 33.5969 10.6252 32.1299 8.90064L33.1301 7.89868C33.7398 8.28108 34.4609 8.44486 35.1756 8.36323C35.8903 8.2816 36.5561 7.95939 37.0642 7.44932C37.6622 6.85182 37.9989 6.04079 38 5.19465C38.0011 4.34852 37.6667 3.53659 37.0702 2.93747C36.4738 2.33836 35.6642 2.00114 34.8196 2C33.9749 1.99886 33.1644 2.3339 32.5664 2.9314ZM32.924 17.0317L15.545 34.4293C14.8918 35.0824 14.1166 35.6003 13.2637 35.9533C12.4108 36.3063 11.4968 36.4875 10.5739 36.4867C9.65109 36.4858 8.73745 36.3029 7.88517 35.9483C7.03288 35.5938 6.25867 35.0745 5.60671 34.4202C4.29002 33.0988 3.55127 31.3075 3.55298 29.4404C3.55468 27.5733 4.2967 25.7834 5.6158 24.4644L22.9827 7.08497C23.2411 6.83365 23.5864 6.6922 23.9465 6.69026H24.0435C26.9107 6.93316 29.099 7.8076 30.6387 9.33786C32.1723 10.8742 33.0634 13.0664 33.2938 15.9386C33.3107 16.1375 33.2854 16.3377 33.2196 16.5261C33.1537 16.7145 33.0489 16.8868 32.9119 17.0317H32.924ZM36.0579 6.42914C35.7278 6.75585 35.2824 6.93906 34.8183 6.93906C34.3542 6.93906 33.9088 6.75585 33.5787 6.42914C33.4159 6.26667 33.2868 6.07361 33.1987 5.86103C33.1106 5.64845 33.0652 5.42054 33.0652 5.19036C33.0652 4.96018 33.1106 4.73227 33.1987 4.51969C33.2868 4.30712 33.4159 4.11405 33.5787 3.95158C33.8989 3.62588 34.3347 3.44032 34.791 3.43542C35.2469 3.44227 35.682 3.62753 36.0034 3.95158C36.3291 4.27197 36.5144 4.70882 36.5186 5.16607C36.5265 5.3974 36.4889 5.62803 36.4077 5.84476C36.3266 6.06149 36.2036 6.26007 36.0458 6.42914H36.0579Z" fill="black"/></svg>                   
            <!-- <img src="images/common/token-validate.svg">  -->
        </div>
        <div class="col-12 m-top-l">
            <h3 class="typography-h3 c-black t-align-center">${this.labels.titleToken}</h3>
        </div>
        <div class="col-6 offset-1 m-top-m" id="tokenInput">
        </div>
        <div class="col-12 m-top-l p-x-l">
            <h5 class="typography-h5 c-neutral-high t-align-center">${this.labels.descriptionToken}</h5>
        </div>
        <div class="col-12 m-top-l p-x-l">
            <h5 id="noAccessLink" class="typography-link t-align-center">${this.labels.linkNoAccess}</h5>
        </div>`;
        let footer = document.createElement("footer");
        footer.setAttribute("data-role", "footer");
        footer.setAttribute("id", `footer${this.settings.rootQuerySelector}`);
        footer.innerHTML =
            `<div class="grid-row m-bottom-l m-top-l">
                <div class="col-12 p-x-l">
                    <button type="button" disabled id="nextStepTempPassBtn" class="btn btn-primary">${this.labels.buttonContinueText}</button>
                </div>
            </div>`;
        (_a = document.querySelector("#securityvalidatorviewmodel")) === null || _a === void 0 ? void 0 : _a.append(footer);
        (_b = document.querySelector("#noAccessLink")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            this.settings.noAccessCallback();
        });
        (_c = document.querySelector("#nextStepTempPassBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            this.settings.successCallback();
        });
        var tokenMethod = this;
        this.tokenInput = new InputCode('#tokenInput', () => { tokenMethod.validate(); return true; }, 2, 3);
    }
    handleTokenValidationResponse(result) {
        var _a;
        //Si es invalida, validar cantidad de intentos
        if (!result) {
            if (this.contadorIntentos >= this.maxIntentos) {
                //Se llama el callback para controlar el maximo de intentos
                this.settings.maxRetryCallback();
            }
            else {
                this.tokenInput.clean();
                this.tokenInput.showError(this.labels.incorrectToken);
            }
        }
        else {
            this.tokenInput.markAsSuccess();
            (_a = document.querySelector("#nextStepTempPassBtn")) === null || _a === void 0 ? void 0 : _a.removeAttribute("disabled");
        }
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- ecalderon
// WORKTEAM: ----- Onix
// version 1.0
const defaultSettings = {
    options: [{ value: '-1', selected: false, text: 'Seleccione...', label: 'Seleccione...', disabled: false, index: 0 }],
    name: '',
    disabled: false,
    scrollable: false,
};
class DropdownComponent {
    /**
     * The constructor of the class.
     * @param {DropdownOptions} settins - DropdownOptions
     */
    constructor(incomingSettins) {
        this.incomingSettins = incomingSettins;
        this.onDefaultChange = (event) => {
            if (event === null || event === void 0 ? void 0 : event.preventDefault)
                event === null || event === void 0 ? void 0 : event.preventDefault();
            if (this.settings.onSelectChange)
                this.settings.onSelectChange(event);
        };
        //linkeamos nuestro plugging con el select nativo (ya sea referenciandolo o creandolo)
        this.nativeHtmlSelect = HTMLSelectDriver.setUpHTMLSelectElement(incomingSettins);
        //optenemos los settings desde el elemento nativo
        let settingFromHTML = HTMLSelectDriver.getSettingsFromHTML(this.nativeHtmlSelect);
        //Unificamos las tres configuraciones 
        this.settings = Object.assign(Object.assign(Object.assign({}, defaultSettings), settingFromHTML), incomingSettins);
        //aplicamos settings al html
        HTMLSelectDriver.applySelectSettingsToHTML(this.nativeHtmlSelect, this.settings);
        //sobreescribirmos comportamientos por los ingresados por el usuario en los settings de entrada
        this.overwriteBehaviors();
        //Creo el elemento de blue que sería la interfaz gráfica select
        this.blueHtmlSelect = new BlueHtmlSelectElement(this.settings, this.nativeHtmlSelect);
        let thisObject = this;
        this.observer = new MutationObserver(function () {
            console.log('vambio el select antes this');
            if (thisObject) {
                let settingFromHTMLChanged = HTMLSelectDriver.getSettingsFromHTML(thisObject.nativeHtmlSelect);
                thisObject.settings = Object.assign(Object.assign({}, thisObject.settings), settingFromHTMLChanged);
                thisObject.blueHtmlSelect.createModal(thisObject.settings);
                thisObject.blueHtmlSelect.renderBlueSelectOptions(thisObject.settings);
            }
        });
        // pasa al observer el nodo y la configuracion
        this.observer.observe(this.nativeHtmlSelect, { attributes: true, childList: true, characterData: true, attributeFilter: ['value', 'disabled'] });
    }
    overwriteBehaviors() {
        var _a;
        if (!this.settings.disabled)
            (_a = this.nativeHtmlSelect) === null || _a === void 0 ? void 0 : _a.addEventListener('change', this.onDefaultChange);
    }
    dispose() {
        this.blueHtmlSelect.dispose();
    }
    addClases(clases) {
        for (const className of clases) {
            this.addClass(className);
        }
    }
    addClass(className) {
        this.blueHtmlSelect.label.classList.add(className);
    }
    getOptionValue() {
        var _a;
        return (_a = this.nativeHtmlSelect) === null || _a === void 0 ? void 0 : _a.value;
    }
}

"use strict";

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- ecalderon
// WORKTEAM: ----- Onix
// version 1.0
class HTMLSelectDriver {
    static getSettingsFromHTML(selectElement) {
        if (selectElement) {
            return {
                name: selectElement.name,
                disabled: selectElement.disabled,
                selectedValue: selectElement.value,
                id: selectElement.id ? selectElement.id : this._getIdByName(selectElement.name),
                options: HTMLSelectDriver.getOptionsFromHTMLElement(selectElement),
                optgroup: HTMLSelectDriver.getOptgroupFromDOM(selectElement)
            };
        }
        else {
            throw new Error(`No exite el select a nivel de HTML`);
        }
    }
    static _getIdByName(name) {
        return name ? name : BLUEUtils.makeRandomId(15);
    }
    static applySelectSettingsToHTML(selectElement, settings) {
        if (selectElement && settings) {
            //Le quitamos los estilos
            selectElement.removeAttribute('class');
            //agregamos la clase blueselect por defecto
            selectElement.classList.add('blueSelect');
            selectElement.disabled = settings.disabled;
            if (settings.name)
                selectElement.setAttribute('name', settings.name);
            if (settings.id)
                selectElement.setAttribute('id', settings.id);
            if (settings.selectedValue) {
                selectElement.value = settings.selectedValue;
            }
        }
        else {
            throw new Error(`No se encontró el select a estilizar o los parámetros necesarios`);
        }
    }
    static setUpHTMLSelectElement(incomingSettins) {
        if (incomingSettins) {
            let result;
            //para poder crear o convertir un select a BLUE debe especificar almenos uno de estos parámetros. Se aplica el principio de fallo rápido
            if (!incomingSettins.querySelector && !incomingSettins.selectElement && !incomingSettins.containerQuerySelector) {
                throw new Error(`Necesita especificar un elemento de tipo select o el id del select al que desea aplicar estilos de BLUE, o el selector de un elemento contenedor para incluir un nuevo select`);
            }
            //Si no especificaron un select para convertir a BLUE entonces se busca con el selector o bien se crea uno nuevo
            if (incomingSettins.selectElement) {
                result = incomingSettins.selectElement;
            }
            else {
                if (document.querySelector(`${incomingSettins.querySelector}`) != undefined) {
                    result = this._getSelectFromDOM(incomingSettins);
                }
                else {
                    result = this._createNewSelect(incomingSettins);
                }
            }
            if (incomingSettins.selectedValue) {
                result.value = incomingSettins.selectedValue;
            }
            return result;
        }
        else {
            throw new Error(`no se encontraron parámetros necesarios para el plugin`);
        }
    }
    static _createNewSelect(incomingSettins) {
        var _a, _b, _c;
        if (incomingSettins.containerQuerySelector) {
            let selectElement = document.createElement("select");
            HTMLSelectDriver.addOptions(incomingSettins, selectElement);
            HTMLSelectDriver.addOptGroup(incomingSettins, selectElement);
            const firstChild = (_a = document.querySelector(incomingSettins.containerQuerySelector)) === null || _a === void 0 ? void 0 : _a.firstChild;
            if (firstChild != null) {
                (_b = document.querySelector(incomingSettins.containerQuerySelector)) === null || _b === void 0 ? void 0 : _b.insertBefore(selectElement, firstChild);
            }
            else {
                (_c = document.querySelector(incomingSettins.containerQuerySelector)) === null || _c === void 0 ? void 0 : _c.appendChild(selectElement);
            }
            return selectElement;
        }
        else {
            throw new Error(`Debe especificar un contenedor para el nuevo select`);
        }
    }
    static addOptGroup(incomingSettins, selectElement) {
        let optionInfo;
        if (incomingSettins.optgroup) {
            for (const groupInfo of incomingSettins.optgroup) {
                let group = document.createElement("optgroup");
                group.label = groupInfo.label;
                group.disabled = groupInfo.disabled;
                if (groupInfo.options) {
                    for (optionInfo of groupInfo.options) {
                        let option = document.createElement("option");
                        option.value = optionInfo.value;
                        option.text = optionInfo.text;
                        if (optionInfo.selected) {
                            option.setAttribute('selected', 'true');
                        }
                        group.appendChild(option);
                    }
                }
                selectElement.add(group);
            }
        }
    }
    static addOptions(incomingSettins, selectElement) {
        var _a;
        let optionInfo;
        if (incomingSettins.options) {
            for (let i = 0; i < ((_a = incomingSettins.options) === null || _a === void 0 ? void 0 : _a.length); i++) {
                optionInfo = incomingSettins.options[i];
                let optionHmtl = document.createElement("option");
                optionHmtl.value = optionInfo.value;
                optionHmtl.text = optionInfo.text;
                if (optionInfo.selected) {
                    optionHmtl.setAttribute('selected', 'true');
                }
                selectElement.add(optionHmtl);
            }
        }
    }
    static _getSelectFromDOM(incomingSettins) {
        if (document.querySelector(`${incomingSettins.querySelector}`) instanceof HTMLSelectElement) {
            return document.querySelector(`${incomingSettins.querySelector}`);
        }
        else {
            throw new Error(`El elemento señalado no es un control de tipo select`);
        }
    }
    static getOptgroupFromDOM(selectElement) {
        let result = new Array();
        if (selectElement) {
            let selectOptions = selectElement === null || selectElement === void 0 ? void 0 : selectElement.children;
            for (const element of Array.from(selectOptions)) {
                if (element.tagName == 'OPTGROUP') {
                    const selectOption = element;
                    result.push({
                        label: selectOption.label,
                        disabled: selectOption.disabled,
                        options: this.getOptionsFromHTMLElement(selectOption)
                    });
                }
                // Do stuff
            }
        }
        return result;
    }
    static getOptionsFromHTMLElement(htmlElement) {
        let result = new Array();
        if (htmlElement.children) {
            let selectOptions = htmlElement.children;
            for (const element of Array.from(selectOptions)) {
                const selectOption = element;
                result.push({
                    value: selectOption.value,
                    text: selectOption.text,
                    label: selectOption.label,
                    disabled: selectOption.disabled,
                    selected: selectOption.selected,
                    index: selectOption.index
                });
            }
        }
        return result;
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- ecalderon
// WORKTEAM: ----- Onix
// version 1.0
class BlueHtmlSelectElement {
    /**
     * The constructor of the class.
     * @param {DropdownOptions} settings - DropdownOptions
     */
    constructor(opt, nativeHtmlSelect) {
        this.nativeHtmlSelect = nativeHtmlSelect;
        this.settings = opt;
        this.container = this._createContainer(nativeHtmlSelect, this.settings);
        this.label = this._createLabel();
        this.container.appendChild(this.label);
        this.selectModalDiv = this._createSelectModal(this.settings);
        this.selectList = this._createSelectList(this.settings);
        this.renderBlueSelectOptions(opt);
        nativeHtmlSelect.classList.add('d-none');
    }
    createModal(opt) {
        this.settings = opt;
        this.selectModalDiv = this._createSelectModal(this.settings);
        this.selectList = this._createSelectList(this.settings);
    }
    renderBlueSelectOptions(opt) {
        this.settings = opt;
        this.selectModalDiv.appendChild(this.selectList);
        this.container.appendChild(this.selectModalDiv);
        this._populateOptions(this.settings);
        if (this.settings.disabled) {
            this.label.classList.add('neutral-medium');
            this.label.classList.add('blue-select-disabled');
            this.label.classList.add('p-events-none');
        }
        else {
            this.label.classList.remove('p-events-none');
            this.label.classList.remove('blue-select-disabled');
            if (BlueHtmlSelectElement.isMobile()) {
                this.selectModalDiv.classList.remove('p-absolute');
                this.selectModalDiv.classList.add('select-box-content-modal');
                this.selectModalDiv.classList.remove('d-none');
                this.modal = new modalBLUE({
                    idModal: `${this.settings.id}modal`,
                    elementReference: `${this.settings.id}Label`,
                    contentHTML: this.selectModalDiv,
                    container: document.body,
                    closeButtom: true,
                    boxContentClass: ''
                });
            }
            else {
                this.label.addEventListener("click", () => {
                    this.selectModalDiv.classList.remove('d-none');
                    this.selectModalDiv.classList.add('select-max-height');
                    document.getElementById(`${this.settings.id}icon`).classList.add('select-rotate-icon');
                });
                let elementsArray = [`${this.settings.id}Label`, `${this.settings.id}p`, `${this.settings.id}icon`];
                document.addEventListener("click", (event) => {
                    let elementClick = event.target;
                    if (elementsArray.indexOf(elementClick.id) == -1 && document.getElementById(`${this.settings.id}icon`).classList.contains('select-rotate-icon')) {
                        document.getElementById(`${this.settings.id}icon`).classList.remove('select-rotate-icon');
                        setTimeout(() => { this.selectModalDiv.classList.add('d-none'); }, 150);
                    }
                });
            }
        }
    }
    _createSelectModal(settings) {
        let result = document.createElement("div");
        result.className = 'd-flex f-column select-box-content w-100 p-md-absolute grid-container d-none p-absolute cursor-pointer';
        result.setAttribute('id', `${settings.id}selectModalDiv`);
        return result;
    }
    _createSelectList(settings) {
        if (settings) {
            let selectList = document.createElement("ul");
            selectList.className = 'w-100 blue-option-list';
            selectList.setAttribute('id', `${settings.id}List`);
            return selectList;
        }
        else {
            throw new Error(`no se encontraron parámetros necesarios para el plugin`);
        }
    }
    _populateOptions(settings) {
        if (settings) {
            if (settings.optgroup && settings.optgroup.length > 0) {
                for (const groupInfo of settings.optgroup) {
                    let visualGroup = document.createElement("li");
                    if (groupInfo.disabled) {
                        visualGroup.setAttribute('selectable', 'true');
                    }
                    visualGroup.classList.add('blue-option-disabled');
                    visualGroup.classList.add('typography-h4');
                    visualGroup.textContent = groupInfo.label;
                    this.selectList.appendChild(visualGroup);
                    this.populateBlueHtmlOptions(groupInfo.options, settings);
                }
            }
            else {
                this.populateBlueHtmlOptions(settings.options, settings);
            }
        }
        else {
            throw new Error(`no se encontraron los options configurados`);
        }
    }
    populateBlueHtmlOptions(options, settings) {
        if (options && settings) {
            let iterations = options.length;
            for (let optionInfo of options) {
                iterations = this.addOption(optionInfo, iterations, settings);
            }
        }
    }
    addOption(optionInfo, iterations, settings) {
        let textOption = optionInfo.label ? optionInfo.label : optionInfo.text;
        let liClass = optionInfo.disabled ? 'blue-option-disabled' : '';
        let displayStyle = (!--iterations) ? 'style="display:list-item"' : '';
        liClass = this.getLIClassList(optionInfo, settings, liClass, textOption);
        let stringHtmlOption = `<li selectable="true" index='${optionInfo.index}' class="${liClass}" tabIndex="0" onkeydown="optionActionByKey(event, this)" ${displayStyle} onclick="BlueHtmlSelectElement.selectOption('${optionInfo.value}','${textOption}','${settings.id}', this, ${settings.onSelectChange});">${textOption}</li>`;
        this.selectList.innerHTML += stringHtmlOption;
        return iterations;
    }
    getLIClassList(optionInfo, settings, liClass, textOption) {
        if (optionInfo.selected || optionInfo.value == settings.selectedValue) {
            liClass = `${liClass} blue-option blue-selected-option`;
            this.label.getElementsByTagName('p')[0].textContent = `${textOption}`;
        }
        else {
            liClass = `${liClass} blue-option typography-p`;
        }
        return liClass;
    }
    static selectOption(valueToSelect, labelSelected, selectId, selectedHtmlOption, onSelectChange) {
        document.getElementById(selectId).value = valueToSelect;
        document.getElementById(`${selectId}p`).textContent = labelSelected;
        const blueHtmlSelect = document.getElementById(`${selectId}List`);
        if (blueHtmlSelect) {
            blueHtmlSelect.querySelectorAll('li').forEach((element) => {
                element.classList.remove('blue-selected-option');
            });
        }
        selectedHtmlOption.classList.add('blue-selected-option');
        if (this.isMobile()) {
            document.getElementById(`btnClose${selectId}modal`).click();
        }
        else {
            document.getElementById(`${selectId}icon`).classList.remove('select-rotate-icon');
            setTimeout(() => { document.getElementById(`${selectId}selectModalDiv`).classList.add('d-none'); }, 150);
        }
        onSelectChange();
    }
    _createContainer(selectElement, settings) {
        var _a;
        if (selectElement && settings) {
            const visualSelectContainer = document.createElement("div");
            visualSelectContainer.className = 'p-relative';
            visualSelectContainer.setAttribute('id', `${settings.id}Div`);
            (_a = selectElement.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(visualSelectContainer, selectElement);
            if (settings.disabled) {
                visualSelectContainer.classList.add('p-events-none');
            }
            else {
                if (settings.scrollable) {
                    visualSelectContainer.setAttribute('scrollable', 'true');
                }
            }
            return visualSelectContainer;
        }
        else {
            throw new Error(`no se encontraron parámetros necesarios para el plugin`);
        }
    }
    _createLabel() {
        if (this.settings) {
            const label = document.createElement("label");
            label.className = 'blue-select blue-select-default d-flex typography-p';
            label.setAttribute('tabIndex', '0');
            label.setAttribute('id', `${this.settings.id}Label`);
            const p = document.createElement("p");
            p.setAttribute('id', `${this.settings.id}p`);
            p.className = 't-truncate d-inline m-reset w-100 d-flex';
            label.appendChild(p);
            const i = document.createElement("i");
            i.setAttribute('id', `${this.settings.id}icon`);
            i.className = 'icons chevron-down-block-after icons-xs d-flex p-left-s a-items-end select-icon';
            label.appendChild(i);
            return label;
        }
        else {
            throw new Error(`no se encontraron parámetros necesarios para el plugin`);
        }
    }
    static _isEnterKey(event) {
        let keycode = event.which || event.keyCode;
        if (keycode == 13) {
            return true;
        }
        return false;
    }
    static isMobile() {
        return ((navigator.userAgent.match(/Android/i)) ||
            (navigator.userAgent.match(/webOS/i)) ||
            (navigator.userAgent.match(/iPhone/i)) ||
            (navigator.userAgent.match(/iPad/i)) ||
            (navigator.userAgent.match(/HarmonyOS/i)));
    }
    dispose() {
        this.container.remove();
    }
}

"use strict";
class ExchangeRateComponent extends Multilanguage {
    constructor(options) {
        super(options.lang);
        this.isDolarizedCountry = false;
        this.link = "";
        this.callbackExchange = () => undefined;
        this.rootElement = document.createElement("div");
        if (options.callbackExchange)
            this.callbackExchange = options.callbackExchange;
        this.model = {
            referenceCurrency: options.referenceCurrency ? options.referenceCurrency : 'USD',
            country: options.country ? options.country : 'CR',
            mode: 'buy',
            inputAmmount: 0.0000,
            result: 0.0000,
        };
        if (options.jsonData) {
            this.jsonData = options.jsonData;
        }
        if (options.link)
            this.link = options.link;
        let component = this;
        this.exchangeRangeCalc(component, options);
    }
    static toggleModeStyles(idReference) {
        var _a, _b, _c, _d;
        (_a = document.getElementById(`sellBotton` + idReference)) === null || _a === void 0 ? void 0 : _a.classList.toggle('f-weight-l');
        (_b = document.getElementById(`sellBotton` + idReference)) === null || _b === void 0 ? void 0 : _b.classList.toggle('typography-h4');
        (_c = document.getElementById(`buyBotton` + idReference)) === null || _c === void 0 ? void 0 : _c.classList.toggle('f-weight-l');
        (_d = document.getElementById(`buyBotton` + idReference)) === null || _d === void 0 ? void 0 : _d.classList.toggle('typography-h4');
    }
    buy(ammount) {
        this.model.mode = 'buy';
        this.model.inputAmmount = ammount;
        this.model.result = this.calculator.buy(ammount);
        if (this.querySelector) {
            this.refreshCurrencyInput();
            this.makeResultLabelSection();
        }
        return this.model.result;
    }
    sell(ammount) {
        this.model.mode = 'sell';
        this.model.inputAmmount = ammount;
        this.model.result = this.calculator.sell(ammount);
        if (this.querySelector) {
            this.refreshCurrencyInput();
            this.makeResultLabelSection();
        }
        return this.model.result;
    }
    getExchangeNow() {
        let exchangeRate = { USD: [], EUR: [] };
        exchangeRate.EUR.push(this.calculator.exchangeRates.EUR.filter(val => val.country_code == this.calculator.country)[0]);
        exchangeRate.USD.push(this.calculator.exchangeRates.USD.filter(val => val.country_code == this.calculator.country)[0]);
        return exchangeRate;
    }
    toggleMode() {
        var _a;
        if (this.model.mode == 'buy') {
            this.model.mode = 'sell';
            if (this.model.inputAmmount) {
                this.model.result = this.calculator.sell(this.model.inputAmmount);
            }
        }
        else {
            this.model.mode = 'buy';
            if (this.model.inputAmmount) {
                this.model.result = this.calculator.buy(this.model.inputAmmount);
            }
        }
        ExchangeRateComponent.toggleModeStyles((_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.id);
        this.refreshCurrencyInput();
        this.makeResultLabelSection();
    }
    toggleReference(reference) {
        this.calculator = new ExchangeRateCalc(this.calculator.exchangeRates, reference, this.model.country);
        this.model = {
            referenceCurrency: reference,
            country: this.model.country,
            mode: 'buy',
            inputAmmount: this.model.inputAmmount
        };
        if (this.model.inputAmmount) {
            this.model.result = this.calculator.buy(this.model.inputAmmount);
        }
        if (this.querySelector) {
            this.showIn(this.querySelector);
        }
    }
    exchangeRangeCalc(component, options) {
        const handleResponse = (response) => {
            if (response) {
                component.calculator = new ExchangeRateCalc(response, options.referenceCurrency, options.country);
                if (component.calculator.selectedExchangeRate.currency_code === 'USD') {
                    component.isDolarizedCountry = true;
                    component.model.referenceCurrency = 'EUR';
                    component.model.mode = 'sell';
                    component.calculator = new ExchangeRateCalc(response, component.model.referenceCurrency, options.country);
                }
                component.querySelector = options.querySelector;
                component.shouldShow(component);
                if (component.callbackExchange) {
                    component.callbackExchange(component.getExchangeNow());
                }
            }
        };
        const requestData = () => {
            var _a;
            if (!options.jsonData) {
                const xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        if (xhttp.responseXML) {
                            const jsonData = convertXmlToJson(xhttp);
                            component.jsonData = jsonData;
                            handleResponse(jsonData);
                        }
                    }
                };
                xhttp.open('GET', (_a = options.link) !== null && _a !== void 0 ? _a : '', true);
                xhttp.send();
            }
            else {
                const jsonData = parseJsonExchange(options.jsonData);
                handleResponse(jsonData);
            }
        };
        requestData();
    }
    shouldShow(component) {
        if (component.querySelector) {
            component.showIn(component.querySelector);
        }
    }
    showIn(querySelector) {
        this.querySelector = querySelector;
        this.rootElement = document.querySelector(this.querySelector);
        this.rootElement.innerHTML = '';
        if (!this.rootElement.id) {
            this.rootElement.id = BLUEUtils.makeRandomId(15);
        }
        this.makeReferenceCurrencies();
        this.getBuyAndSellOptions();
        this.makeInputSection();
        this.makeResultLabelSection();
    }
    setInputBehaivor() {
        var _a, _b, _c, _d;
        let component = this;
        (_b = document.getElementById(`switch${(_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.id}`)) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (event) => {
            component.toggleMode();
        });
        (_d = document.getElementById(`inputCalcAmmount${(_c = this.rootElement) === null || _c === void 0 ? void 0 : _c.id}`)) === null || _d === void 0 ? void 0 : _d.addEventListener('keyup', (event) => {
            var _a;
            let calcInputElement = document.getElementById(`inputCalcAmmount${(_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.id}`);
            if (calcInputElement) {
                if (component.model.mode == 'buy') {
                    component.buy(Number(calcInputElement.value));
                }
                else {
                    component.sell(Number(calcInputElement.value));
                }
            }
        });
    }
    makeReferenceCurrencies() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (this.isDolarizedCountry) {
            this.rootElement.appendChild(BLUEUtils.stringToHTML(`<div class="col-12 m-top-m d-flex j-content-center">
                    <label class="typography-h2 f-weight-m">${this.labels.EUR}</label>
                </div>`));
        }
        else {
            this.rootElement.appendChild(BLUEUtils.stringToHTML(`<div class="col-12 m-top-m m-x-m p-reset">
                    <h5 class="typography-h5 f-weight-m" >${this.labels.select_currency_label}</h5>
                </div>`));
            this.rootElement.appendChild(BLUEUtils.stringToHTML(`<div class="col-12 d-flex m-top-s j-content-between p-x-reset">
                    <div class="col-6 p-reset">
                        <div class="p-right-xs p-x-m">
                            <input type="radio" name="referenceCurrency" ${this.model.referenceCurrency == 'USD' ? 'checked' : ''} class="selection-box" id="referenceCurrencyUSD${(_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.id}">
                            <label class="selection-box-label" for="referenceCurrencyUSD${(_b = this.rootElement) === null || _b === void 0 ? void 0 : _b.id}" >${this.labels.USD}</label>
                        </div>
                    </div>
                    <div class="col-6 p-reset">
                        <div class="p-x-m">
                            <input type="radio" name="referenceCurrency" ${this.model.referenceCurrency == 'EUR' ? 'checked' : ''} class="selection-box" id="referenceCurrencyEUR${(_c = this.rootElement) === null || _c === void 0 ? void 0 : _c.id}">
                            <label class="selection-box-label" for="referenceCurrencyEUR${(_d = this.rootElement) === null || _d === void 0 ? void 0 : _d.id}">${this.labels.EUR}</label>
                        </div>
                    </div>
                 </div>`));
            this.rootElement.appendChild(BLUEUtils.stringToHTML(`<hr class="hr-primary  m-top-l">`));
            let component = this;
            (_f = document.getElementById('referenceCurrencyUSD' + ((_e = this.rootElement) === null || _e === void 0 ? void 0 : _e.id))) === null || _f === void 0 ? void 0 : _f.addEventListener('click', (event) => {
                component.toggleReference('USD');
            });
            (_h = document.getElementById('referenceCurrencyEUR' + ((_g = this.rootElement) === null || _g === void 0 ? void 0 : _g.id))) === null || _h === void 0 ? void 0 : _h.addEventListener('click', (event) => {
                component.toggleReference('EUR');
            });
        }
    }
    getBuyAndSellOptions() {
        var _a, _b, _c, _d, _e, _f;
        this.rootElement.appendChild(BLUEUtils.stringToHTML(`<div class="col-12 d-flex m-top-l m-x-s j-content-center gap-m">
                <button id="buyBotton${(_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.id}" type="button" class="m-right-xs t-align-center btn btn-auxiliary ${this.model.mode == 'buy' ? 'f-weight-l typography-h4' : ''}">${this.labels.buy}: <span id="buyBottonSymbol">${CurrencySymbols[this.calculator.selectedExchangeRate.currency_code]}</span><span id="buyBottonAmount">${this.calculator.selectedExchangeRate.buy}</span></button>
            <div class="b-left"></div>
                <button id="sellBotton${(_b = this.rootElement) === null || _b === void 0 ? void 0 : _b.id}" type="button" class="m-left-xs t-align-center btn btn-auxiliary ${this.model.mode == 'sell' ? 'f-weight-l typography-h4' : ''}">${this.labels.sell}: <span id="sellBottonSymbol">${CurrencySymbols[this.calculator.selectedExchangeRate.currency_code]}</span><span id="sellBottonAmount">${this.calculator.selectedExchangeRate.sell}</span></button>
            </div>`));
        let componenent = this;
        (_d = document.getElementById(`buyBotton${(_c = this.rootElement) === null || _c === void 0 ? void 0 : _c.id}`)) === null || _d === void 0 ? void 0 : _d.addEventListener('click', (event) => {
            var _a, _b;
            if (this.model.mode == 'sell') {
                ExchangeRateComponent.toggleModeStyles((_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.id);
                let calcInputElement = document.getElementById(`inputCalcAmmount${(_b = this.rootElement) === null || _b === void 0 ? void 0 : _b.id}`);
                if (calcInputElement) {
                    componenent.model.mode = 'buy';
                    componenent.buy(Number(calcInputElement.value));
                }
            }
        });
        (_f = document.getElementById(`sellBotton${(_e = this.rootElement) === null || _e === void 0 ? void 0 : _e.id}`)) === null || _f === void 0 ? void 0 : _f.addEventListener('click', (event) => {
            var _a, _b;
            if (this.model.mode == 'buy') {
                ExchangeRateComponent.toggleModeStyles((_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.id);
                let calcInputElement = document.getElementById(`inputCalcAmmount${(_b = this.rootElement) === null || _b === void 0 ? void 0 : _b.id}`);
                if (calcInputElement) {
                    componenent.model.mode = 'sell';
                    componenent.sell(Number(calcInputElement.value));
                }
            }
        });
    }
    makeInputSection() {
        var _a, _b, _c, _d;
        let inputSectionContainer = document.createElement('div');
        inputSectionContainer.classList.add('d-flex', 'm-top-s', 'a-items-center', 'p-x-l');
        inputSectionContainer.setAttribute('id', `inputSectionContainer${(_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.id}`);
        inputSectionContainer.append(BLUEUtils.stringToHTML(`<div class="p-x-m c-brand-low cursor-pointer" id="switch${(_b = this.rootElement) === null || _b === void 0 ? void 0 : _b.id}">
                                                <i class="icons half-arrow-up-down-filled-before icons-xl"></i>
                                            </div>`));
        inputSectionContainer.append(BLUEUtils.stringToHTML(`<div class="d-flex f-grow-1">
                    <input id="inutCurrencyCode${(_c = this.rootElement) === null || _c === void 0 ? void 0 : _c.id}" class="t-align-center bg-color-white input-file p-s typography-placeholder m-reset" disabled="" value="${this.model.mode == 'buy' ? this.model.referenceCurrency : this.calculator.selectedExchangeRate.currency_code}">
                    <input id="inputCalcAmmount${(_d = this.rootElement) === null || _d === void 0 ? void 0 : _d.id}" onkeypress="return isNumberKeyCode(event);" type="text" placeholder="0" class="input-main typography-p t-align-right cursor-text">
                </div>`));
        this.rootElement.appendChild(inputSectionContainer);
        this.setInputBehaivor();
    }
    refreshCurrencyInput() {
        var _a;
        let inutCurrencyCode = document.getElementById(`inutCurrencyCode${(_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.id}`);
        if (inutCurrencyCode) {
            inutCurrencyCode.value = this.model.mode == 'buy' ? this.model.referenceCurrency : this.calculator.selectedExchangeRate.currency_code;
        }
    }
    makeResultLabelSection() {
        var _a, _b, _c, _d, _e, _f;
        let amountAsString = '' + this.model.result;
        let decimals;
        if (amountAsString.includes('.') && this.model.result) {
            if (this.model.result > 0 && Number(this.model.result.toFixed(this.calculator.selectedExchangeRate.decimals)) == 0.0000) {
                decimals = this.getDecimalPartOfString(0.0000.toFixed(this.calculator.selectedExchangeRate.decimals));
            }
            else {
                let decimalPartOfResult = this.decilmalPartOf(this.model.result);
                decimals = decimalPartOfResult.split('.')[1];
            }
        }
        else {
            decimals = this.getDecimalPartOfString(0.0000.toFixed(this.calculator.selectedExchangeRate.decimals));
        }
        (_b = document.getElementById(`resultContainer${(_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.id}`)) === null || _b === void 0 ? void 0 : _b.remove();
        this.rootElement.appendChild(BLUEUtils.stringToHTML(`<div class="t-align-right m-top-m p-x-l m-bottom-s" id="resultContainer${(_c = this.rootElement) === null || _c === void 0 ? void 0 : _c.id}"> 
                <p class="typography-h3 c-black-low"> <span id="resultSymbol${(_d = this.rootElement) === null || _d === void 0 ? void 0 : _d.id}">${this.model.mode == 'buy' ? this.calculator.selectedExchangeRate.currency_code : this.model.referenceCurrency} </span><span id="resultAmmount${(_e = this.rootElement) === null || _e === void 0 ? void 0 : _e.id}">${this.model.result ? this.formatAmountMiles(Math.trunc(this.model.result)) : 0}</span>.<span class="typography-p f-size-l f-weight-l c-black-low" id="resultAmmountDecimals${(_f = this.rootElement) === null || _f === void 0 ? void 0 : _f.id}">${decimals}</span></p>
            </div>`));
    }
    formatAmountMiles(amount) {
        const amountMiles = new Intl.NumberFormat('en-US').format(amount);
        return amountMiles;
    }
    getDecimalPartOfString(numberAsString) {
        return numberAsString.split('.')[1];
    }
    decilmalPartOf(value) {
        return (value - Math.floor(value)).toFixed(this.calculator.selectedExchangeRate.decimals);
    }
}
function convertXmlToJson(xhttp) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (xhttp === null || xhttp === void 0 ? void 0 : xhttp.responseXML) {
        let exchangeRates = {
            USD: [],
            EUR: []
        };
        for (let node of xhttp.responseXML.querySelectorAll('exchangeRates country')) {
            let name = (_a = node.querySelector('name')) === null || _a === void 0 ? void 0 : _a.textContent;
            let buyRateUSD = (_c = (_b = node.querySelector('buyRateUSD')) === null || _b === void 0 ? void 0 : _b.textContent) === null || _c === void 0 ? void 0 : _c.replace(',', '.');
            let saleRateUSD = (_e = (_d = node.querySelector('saleRateUSD')) === null || _d === void 0 ? void 0 : _d.textContent) === null || _e === void 0 ? void 0 : _e.replace(',', '.');
            let buyRateEUR = (_g = (_f = node.querySelector('buyRateEUR')) === null || _f === void 0 ? void 0 : _f.textContent) === null || _g === void 0 ? void 0 : _g.replace(',', '.');
            let saleRateEUR = (_j = (_h = node.querySelector('saleRateEUR')) === null || _h === void 0 ? void 0 : _h.textContent) === null || _j === void 0 ? void 0 : _j.replace(',', '.');
            for (let exchangeRate of suportedExchangeRates) {
                if (exchangeRate.country_name == (name === null || name === void 0 ? void 0 : name.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                    let usdExchangeRate = Object.assign(Object.assign({}, exchangeRate), { buy: buyRateUSD, sell: saleRateUSD, buyRate: Number(buyRateUSD), sellRate: Number(saleRateUSD) });
                    let eurExchangeRate = Object.assign(Object.assign({}, exchangeRate), { buy: buyRateEUR, sell: saleRateEUR, buyRate: Number(buyRateEUR), sellRate: Number(saleRateEUR) });
                    exchangeRates.USD.push(usdExchangeRate);
                    exchangeRates.EUR.push(eurExchangeRate);
                }
            }
        }
        return exchangeRates;
    }
    else {
        throw new Error("Error convirtiendo el XML de tipo de cambio a JSON");
    }
}
function parseJsonExchange(jsonData) {
    if (!jsonData) {
        throw new Error("Error leyendo la estructura del JSON");
    }
    let exchangeRates = {
        USD: [],
        EUR: []
    };
    function processNode(node, currency) {
        for (let nodeItem of node) {
            let country_code = nodeItem.country_code;
            let buyRate = nodeItem.buy;
            let sellRate = nodeItem.sell;
            for (let exchangeRate of suportedExchangeRates) {
                if (exchangeRate.country_code === country_code) {
                    let newExchangeRate = Object.assign(Object.assign({}, exchangeRate), { buyRate: Number(roundNumber(Number(buyRate), exchangeRate.decimals)), sellRate: Number(roundNumber(Number(sellRate), exchangeRate.decimals)), buy: roundNumber(Number(buyRate), exchangeRate.decimals), sell: roundNumber(Number(sellRate), exchangeRate.decimals) });
                    exchangeRates[currency].push(newExchangeRate);
                }
            }
        }
    }
    processNode(jsonData.USD, 'USD');
    processNode(jsonData.EUR, 'EUR');
    return exchangeRates;
}
function roundNumber(value, decimals) {
    if (value && decimals) {
        let cal = Number(value + "e" + decimals);
        return (Number(Math.round(cal) + "e-" + decimals)).toFixed(decimals);
    }
    return undefined;
}

"use strict";
class ExchangeRateCalc {
    constructor(exchangeRates, referenceCurrency = 'USD', country = 'CR') {
        this.country = 'CR';
        this.referenceCurrency = 'USD';
        this.country = country;
        this.referenceCurrency = referenceCurrency;
        this.exchangeRates = exchangeRates;
        let exchangeRate = this.exchangeRates[this.referenceCurrency].find((exchangeRate) => exchangeRate.country_code == this.country);
        if (exchangeRate) {
            this.selectedExchangeRate = exchangeRate;
        }
        else {
            throw new Error('No existe tipo de cambio para los datos de entrada');
        }
    }
    setCountry(country) {
        this.country = country;
    }
    setReferenceCurrency(referenceCurrency = 'USD') {
        this.referenceCurrency = referenceCurrency;
    }
    getCurrentExchangeRate() {
        return this.selectedExchangeRate;
    }
    buy(quantityInReferenceCurrency) {
        let exchangeRate = this.exchangeRates[this.referenceCurrency].find((exchangeRate) => exchangeRate.country_code == this.country);
        if (exchangeRate === null || exchangeRate === void 0 ? void 0 : exchangeRate.buyRate) {
            return exchangeRate.buyRate * quantityInReferenceCurrency;
        }
        else {
            throw new Error("No existe el tipo de cambio solicitado");
        }
    }
    sell(quantityInLocalCurrency) {
        let exchangeRate = this.exchangeRates[this.referenceCurrency].find((exchangeRate) => exchangeRate.country_code == this.country);
        if (exchangeRate === null || exchangeRate === void 0 ? void 0 : exchangeRate.sellRate) {
            return quantityInLocalCurrency / exchangeRate.sellRate;
        }
        else {
            throw new Error("No existe el tipo de cambio solicitado");
        }
    }
}

"use strict";
const CurrencySymbols = {
    USD: '$',
    EUR: '&euro;',
    CRC: '&#8353;',
    COP: 'COP',
    LPS: 'L',
    COR: 'C$',
    QTZ: 'Q'
};
const SupportedReferenceCurrencies = ['USD', 'EUR'];
const suportedExchangeRates = [
    {
        country_code: 'PA',
        country_name: 'Panama',
        currency_code: 'USD',
        currency_symbol: '$',
        decimals: 4
    },
    {
        country_code: 'CR',
        country_name: 'Costa Rica',
        currency_code: 'CRC',
        currency_symbol: '&#8353;',
        decimals: 2
    },
    {
        country_code: 'NI',
        country_name: 'Nicaragua',
        currency_code: 'COR',
        currency_symbol: 'C$',
        decimals: 2
    },
    {
        country_code: 'HN',
        country_name: 'Honduras',
        currency_code: 'LPS',
        currency_symbol: 'L',
        decimals: 4
    },
    {
        country_code: 'SV',
        country_name: 'El Salvador',
        currency_code: 'USD',
        currency_symbol: '$',
        decimals: 3
    },
    {
        country_code: 'GT',
        country_name: 'Guatemala',
        currency_code: 'QTZ',
        currency_symbol: 'Q',
        decimals: 2
    },
    {
        country_code: 'GO',
        country_name: 'Guatemala zona maritima',
        currency_code: 'USD',
        currency_symbol: '$',
        decimals: 4
    }
];

"use strict";
class StepsComponent {
    constructor(options) {
        this.current_position = 0;
        this.MAX_STEPS = 7;
        this.MIN_STEPS = 2;
        this.destroy = () => {
            this.html_element.innerHTML = '';
        };
        this.isValidPosition = (position) => position >= 0 && position < this.settings.steps_quantity;
        this.settings = Object.assign({
            default_position: 0,
            steps_align: 'center'
        }, options);
        this.html_element = this._getRootElement();
        if (this.settings.steps_quantity < this.MIN_STEPS || this.settings.steps_quantity > this.MAX_STEPS)
            throw new Error(`La cantidad de pasos debe ser entre ${this.MIN_STEPS} y ${this.MAX_STEPS}`);
        if (0 > this.settings.default_step_selected || this.settings.steps_quantity < this.settings.default_step_selected)
            throw new Error(`El paso a seleccionar por defecto es invalido`);
        this.current_position = this.settings.default_step_selected ? this.settings.default_step_selected - 1 : 0;
        this.buildHtmlSteps();
    }
    _getRootElement() {
        if (!this.settings.root_element && !this.settings.query_selector)
            throw new Error('Es necesario especificar un elemento de HTML o bien su referencia mediante un selector');
        if (this.settings.root_element) {
            return this.settings.root_element;
        }
        else {
            let selectedElement = document.querySelector(this.settings.query_selector);
            if (selectedElement) {
                return selectedElement;
            }
            else {
                throw new Error('No se ha encontrado el elemento especificado');
            }
        }
    }
    buildHtmlSteps() {
        this.html_element.classList.add('steps-container', 'p-relative', 'd-flex', `j-content-${this.settings.steps_align}`);
        for (let i = 0; i < this.settings.steps_quantity; i++) {
            this.html_element.append(BLUEUtils.stringToHTML('<div id="step-' + i + '"></div>'));
        }
    }
    next() {
        let next_position = this.current_position + 1;
        if (this.isValidPosition(next_position)) {
            this.setAsVisited(this.current_position);
            this.current_position = next_position;
            this.setAsSelected(this.current_position);
        }
    }
    back() {
        let previous_position = this.current_position - 1;
        if (this.isValidPosition(previous_position)) {
            this.setAsDefault(this.current_position);
            this.current_position = previous_position;
            this.setAsSelected(this.current_position);
        }
    }
    restart() {
        for (let index = this.current_position; index > 0; index--) {
            this.setAsDefault(index);
        }
        this.current_position = 0;
        this.setAsSelected(this.current_position);
    }
}

"use strict";
class DotSteps extends StepsComponent {
    constructor(options) {
        super(Object.assign({}, options));
        this.build();
    }
    build() {
        var _a;
        Array.from(this.html_element.children).forEach((item) => {
            let dot = item;
            dot.classList.add('dots');
        });
        (_a = this.html_element.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add("init-dot");
    }
    setAsSelected(index) {
        let percentageCalc = index * 100, pxCalc = index * 14;
        this.html_element.querySelector('#step-0').style.setProperty("--transform-position", "translateX(calc(" + percentageCalc + "% + " + pxCalc + "px))");
    }
    setAsVisited(index) {
        this.html_element.querySelector('#step-' + index).classList.add('done');
    }
    setAsDefault(index) {
        this.html_element.querySelector('#step-' + index).classList.remove('done');
    }
}

"use strict";
class WizardSteps extends StepsComponent {
    constructor(options, wizardLabelList) {
        super(Object.assign(Object.assign({}, options), { steps_quantity: wizardLabelList.length }));
        this.stepsData = [];
        this.wizardLabelList = wizardLabelList;
        this.build();
    }
    build() {
        var _a;
        Array.from(this.html_element.children).forEach((item, index) => {
            let step = item;
            step.classList.add('wizard-step', 'p-relative', 'w-auto');
            const label = this._createLabel(index);
            step.append(label);
            this.html_element.append(step);
            if (index < this.current_position) {
                this.setAsVisited(index);
            }
            else {
                this.setAsDefault(index);
            }
        });
        (_a = this.html_element.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add('wizard-step-selector');
        this.setAsSelected(this.current_position);
    }
    setAsSelected(index) {
        let percentageCalc = index * 100, pxCalc = index * 3;
        this.html_element.querySelector('#step-0').style.setProperty("--transform-position", "translateX(calc(" + percentageCalc + "% + " + pxCalc + "px))");
        this.stepsData[index].label.classList.add('f-weight-m', 'c-black');
    }
    setAsDefault(index) {
        this.html_element.querySelector('#step-' + (index)).classList.remove('wizard-step-viewed');
        this.stepsData[index].label.classList.remove('f-weight-m', 'c-black', 'c-neutral-high');
        this.stepsData[index].label.classList.add('c-neutral-medium');
    }
    setAsVisited(index) {
        this.html_element.querySelector('#step-' + (index)).classList.add('wizard-step-viewed');
        this.stepsData[index].label.classList.remove('f-weight-m', 'c-black', 'c-neutral-medium');
        this.stepsData[index].label.classList.add('c-neutral-high');
    }
    _createLabel(index) {
        if (!this.wizardLabelList)
            throw new Error(`No existen labels para el component de wizard`);
        const label = document.createElement("span");
        const labelText = this.wizardLabelList[index];
        const labelTextNode = document.createTextNode(labelText);
        label.classList.add('wizard-step-text', 'p-absolute', 'typography-p', 'd-block');
        const stepData = { label, index };
        this.stepsData = [...this.stepsData, stepData];
        label.appendChild(labelTextNode);
        return label;
    }
}

"use strict";
class InputAbstractComponent {
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- scontreras
// WORKTEAM: ----- Onix
// version 1.0
/* "Esta clase es un componente que representa un elemento de entrada".

Lo primero que hacemos es importar la clase InputAbstractComponent. Esta clase es una clase abstracta que contiene la
lógica de la clase InputComponent */
class InputComponent extends InputAbstractComponent {
    /**
     * La función constructora se utiliza para inicializar las propiedades del componente y representar el componente.
     * @param {InputComponentOptions} options - InputComponentOptions: el objeto de opciones que se pasa al constructor.
     */
    constructor(options) {
        super();
        this.options = options;
        this.disabled = false;
        this.showPassword = false;
        this.callBackDestroyInput = () => undefined;
        this.callBackSearch = (any) => { console.log(any); };
        /* Renderizando el componente. */
        this.render = () => {
            const rootElement = document.querySelector(`#${this.rootElement}`);
            if (rootElement)
                this.prepare(rootElement);
            else
                throw new Error(`No existe ningún elemento con el ID (${this.rootElement})`);
            if (this.typeSearch) {
                this.inputElement.addEventListener('keyup', this.dataFilter);
                this.inputElement.addEventListener('paste', this.dataFilter);
            }
            return this;
        };
        /* Metodo encargado de filtrar los datos  */
        this.dataFilter = () => {
            var _a, _b;
            if (event) {
                let e = event;
                this.search = ((_a = e.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text')) ? (_b = e.clipboardData) === null || _b === void 0 ? void 0 : _b.getData('text') : this.inputElement.value;
                let searchResult = (this.search && this.dataSearch) ? BLUEUtils.dataFilter(this.search, this.dataSearch, this.dataKey) : null;
                this.callBackSearch(searchResult);
            }
            else {
                this.search = this.inputElement.value;
                let searchResult = (this.search && this.dataSearch) ? BLUEUtils.dataFilter(this.search, this.dataSearch, this.dataKey) : null;
                this.callBackSearch(searchResult);
            }
        };
        /* Un método que se llama cuando cambia el valor de la entrada. */
        this.onDefaultChange = (event) => {
            if (event === null || event === void 0 ? void 0 : event.preventDefault)
                event === null || event === void 0 ? void 0 : event.preventDefault();
            if (this.onChange)
                this.onChange(event);
            else {
                //  Default change value
            }
        };
        /* Preparación del componente de entrada. */
        this.prepare = (rootElement) => {
            this.prepareLabel(rootElement);
            this.preparePrefix();
            this.prepareInput(rootElement);
            this.prepareSuffix();
            return this;
        };
        /* Adición de un prefijo al elemento de entrada. */
        this.preparePrefix = () => {
            if (!this.prefix)
                return;
            if (this.options.prefix) {
                if (this.options.prefix instanceof InputIconComponent
                    || (this.options.prefix instanceof InputButtonComponent && !this.options.prefix.asInput)) {
                    this.inputElement.classList.add('p-left-xl');
                }
                this.containerElement.appendChild(this.options.prefix.node);
            }
        };
        /**
         * "Esta función toma un elemento raíz y le agrega un elemento contenedor, luego agrega un elemento de entrada al elemento
         * contenedor, establece los atributos del elemento de entrada y agrega detectores de eventos al elemento de entrada".
         *
         * Lo primero que hacemos es agregar el elemento contenedor al elemento raíz.
         * @param {HTMLElement} rootElement - HTMLElement: el elemento raíz del componente.
         */
        this.prepareInput = (rootElement) => {
            var _a, _b;
            rootElement.appendChild(this.containerElement);
            if (this.name)
                this.inputElement.setAttribute('name', this.name);
            if (this.id)
                this.inputElement.setAttribute('id', this.id);
            this.inputElement.setAttribute('type', this.password ? 'password' : 'text');
            this.inputElement.disabled = (_a = this.disabled) !== null && _a !== void 0 ? _a : false;
            this.containerElement.appendChild(this.inputElement);
            if (this.value)
                this.inputElement.value = this.value;
            if (this.placeholder)
                this.inputElement.placeholder = this.placeholder;
            if (!this.disabled)
                this.inputElement.addEventListener('input', this.onDefaultChange);
            this.inputElement.classList.add('input-main', 'm-top-xs', 'typography-p', 'input-config-reveal');
            this.containerElement.classList.add('d-flex', ...(_b = this.classes) !== null && _b !== void 0 ? _b : []);
        };
        /* El código anterior está agregando un detector de eventos al elemento de entrada. */
        this.prepareSuffix = () => {
            if (!this.suffix)
                return;
            if (this.options.suffix instanceof InputIconComponent) {
                this.inputElement.classList.add('p-right-xl');
            }
            if (this.options.suffix instanceof InputButtonComponent) {
                this.inputElement.classList.add('input-space-button');
            }
            /* Agregar un detector de eventos al nodo de sufijo. */
            this.addSuffix();
            /* El código anterior está agregando un detector de eventos al elemento de entrada. */
            this.prepareSuffixAfterTyping();
            this.containerElement.appendChild(this.suffix.node);
        };
        /* El código anterior es un método que se llama cuando el usuario hace clic en el sufijo. Está comprobando si el sufijo
        es una instancia de InputButtonComponent. Si es así, está comprobando si la matriz secondIconClasses tiene una
        longitud. Si lo hace, está configurando iconClasses y secondIconClasses a iconClasses y secondIconClasses del
        sufijo. Luego establece las clases en secondIconClasses si showPassword es verdadero; de lo contrario, establece las
        clases en iconClasses. Luego está reemplazando las clases del nodo con las clases. */
        this.onHiddenPassword = (event) => {
            const mainNode = event === null || event === void 0 ? void 0 : event.target;
            if (event === null || event === void 0 ? void 0 : event.preventDefault)
                event === null || event === void 0 ? void 0 : event.preventDefault();
            /* Este es un operador ternario. Es una forma abreviada de una declaración if/else. */
            this.showPassword = !this.showPassword;
            this.onHiddenPasswordSuffix(mainNode);
            /* Este es un operador ternario. Es una forma abreviada de una declaración if/else. */
            this.inputElement.setAttribute('type', this.showPassword ? 'text' : 'password');
        };
        /* Crear una nueva instancia de la clase InputLabelComponent y agregarla a rootElement. */
        this.prepareLabel = (rootElement) => {
            if (this.label && this.label instanceof InputLabelComponent) {
                rootElement.appendChild(this.label.labelElement);
            }
            else if (this.label) {
                const inputLabel = new InputLabelComponent({
                    classes: ['typography-label'],
                    for: this.name,
                    text: this.label
                });
                rootElement.appendChild(inputLabel.labelElement);
            }
        };
        this.dispose = () => {
            var _a, _b;
            (_a = this.inputElement.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.inputElement);
            (_b = this.containerElement.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.containerElement);
        };
        this.setVisivility = ({ target }) => {
            if (!this.suffix)
                return;
            const { value } = target;
            if (value)
                this.suffix.node.style.visibility = "visible";
            else
                this.suffix.node.style.visibility = "hidden";
        };
        this.disabled = options === null || options === void 0 ? void 0 : options.disabled;
        this.rootElement = options === null || options === void 0 ? void 0 : options.rootElement;
        this.currentValue = options === null || options === void 0 ? void 0 : options.value;
        this.value = options === null || options === void 0 ? void 0 : options.value;
        this.name = options === null || options === void 0 ? void 0 : options.name;
        this.id = options === null || options === void 0 ? void 0 : options.id;
        this.placeholder = options === null || options === void 0 ? void 0 : options.placeholder;
        this.password = options === null || options === void 0 ? void 0 : options.password;
        this.showSuffixAfterTyping = options === null || options === void 0 ? void 0 : options.showSuffixAfterTyping;
        this.label = options === null || options === void 0 ? void 0 : options.label;
        this.prefix = options === null || options === void 0 ? void 0 : options.prefix;
        this.suffix = options === null || options === void 0 ? void 0 : options.suffix;
        this.classes = options === null || options === void 0 ? void 0 : options.classes;
        this.borderColor = options === null || options === void 0 ? void 0 : options.borderColor;
        this.description = options === null || options === void 0 ? void 0 : options.description;
        this.typeSearch = options === null || options === void 0 ? void 0 : options.typeSearch;
        this.search = options === null || options === void 0 ? void 0 : options.search;
        this.dataSearch = options === null || options === void 0 ? void 0 : options.dataSearch;
        this.dataKey = options === null || options === void 0 ? void 0 : options.dataKey;
        this.onChange = options === null || options === void 0 ? void 0 : options.onChange;
        this.onValidate = options === null || options === void 0 ? void 0 : options.onValidate;
        if (options === null || options === void 0 ? void 0 : options.callBackSearch)
            this.callBackSearch = options === null || options === void 0 ? void 0 : options.callBackSearch;
        this.containerElement = document.createElement("div");
        this.inputElement = document.createElement("input");
        this.render();
    }
    onHiddenPasswordSuffix(mainNode) {
        if (mainNode && mainNode instanceof HTMLElement) {
            /* El código anterior verifica si el sufijo es una instancia de InputButtonComponent. Si es así, está
            comprobando si la matriz secondIconClasses tiene una longitud. Si lo hace, está configurando iconClasses y
            secondIconClasses a iconClasses y secondIconClasses del sufijo. Luego, establece las clases en
            secondIconClasses si showPassword es verdadero; de lo contrario, establece las clases en iconClasses. Luego
            está reemplazando las clases del nodo con las clases. */
            if (this.options.suffix instanceof InputButtonComponent) {
                this.setButtonSuffix(mainNode);
                /* Comprobando si el sufijo es una instancia de InputIconComponent. Si es así, está comprobando si la matriz
                secondIconClasses tiene una longitud. Si lo hace, está configurando iconClasses y secondIconClasses en
                iconClasses y secondIconClasses del sufijo. Luego, establece las clases en secondIconClasses si showPassword
                es verdadero; de lo contrario, establece las clases en iconClasses. Luego está reemplazando las clases de
                nodo con las clases. */
            }
            else if (this.options.suffix instanceof InputIconComponent) {
                this.setIconSuffix();
            }
        }
    }
    setButtonSuffix(mainNode) {
        var _a, _b;
        if (this.options.suffix instanceof InputButtonComponent) {
            const add = (...tokens) => mainNode.classList.add(...tokens);
            const remove = (...tokens) => mainNode.classList.remove(...tokens);
            const filterIcon = (icon) => icon.replace(/\s/gi, '');
            const exec = this.showPassword ? add : remove;
            if (this.options.suffix.secondIcon)
                exec(filterIcon(this.options.suffix.secondIcon));
            mainNode.textContent = this.showPassword
                ? (_a = this.options.suffix.hiddenMessage) !== null && _a !== void 0 ? _a : ''
                : (_b = this.options.suffix.text) !== null && _b !== void 0 ? _b : '';
        }
    }
    setIconSuffix() {
        var _a;
        if (this.options.suffix instanceof InputIconComponent) {
            if ((_a = this.options.suffix.secondIconClasses) === null || _a === void 0 ? void 0 : _a.length) {
                const { iconClasses, secondIconClasses, replaceNodeClasses } = this.options.suffix;
                const classes = this.showPassword
                    ? secondIconClasses !== null && secondIconClasses !== void 0 ? secondIconClasses : []
                    : iconClasses !== null && iconClasses !== void 0 ? iconClasses : [];
                replaceNodeClasses(...classes);
            }
        }
    }
    prepareSuffixAfterTyping() {
        if (this.suffix) {
            if (this.showSuffixAfterTyping) {
                this.suffix.node.style.visibility = 'hidden';
                this.addKeyupEvent();
                this.addClickEvent();
            }
        }
    }
    addClickEvent() {
        this.inputElement.addEventListener("click", this.setVisivility);
    }
    addKeyupEvent() {
        this.inputElement.addEventListener("keyup", this.setVisivility);
    }
    addSuffix() {
        var _a;
        if (this.suffix) {
            if (this.options.suffix) {
                if ((this.options.suffix instanceof InputButtonComponent) || this.options.suffix instanceof InputIconComponent && ((_a = this.options.suffix.secondIconClasses) === null || _a === void 0 ? void 0 : _a.length)) {
                    this.suffix.node.addEventListener('click', this.onHiddenPassword);
                }
            }
        }
    }
    addClases(clases) {
        for (const className of clases) {
            this.addClass(className);
        }
    }
    addClass(className) {
        this.inputElement.classList.add(className);
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- scontreras
// WORKTEAM: ----- Onix
// version 1.0
class InputButtonComponent extends InputAbstractComponent {
    /**
     * La función constructora se usa para crear una nueva instancia de la clase.
     * @param {InputButtonComponentOptions} options - InputButtonComponentOptions: este es el objeto de opciones que se
     * pasará al constructor.
     */
    constructor(options) {
        var _a, _b, _c;
        super();
        this.options = options;
        this.disabled = false;
        this.asInput = false;
        /* Un método que devuelve la clase misma. */
        this.render = () => {
            this.prepare();
            if (this.rootElement) {
                const rootElement = document.querySelector(this.rootElement);
                if (rootElement)
                    rootElement.appendChild(this.node);
            }
            return this;
        };
        /* Un método que devuelve la propia clase. */
        this.prepare = () => {
            /* Agregar las clases al node. */
            this.node.classList.add(...this.classes);
            /* Esto verifica si la función onDefaultClick está definida y, si lo está, agrega un detector de eventos al
            node. */
            if (this.onDefaultClick)
                this.node.addEventListener('click', this.onDefaultClick);
            /* Verificar si buttonElement es una instancia de HTMLInputElement y si lo es, está configurando el valor de
            buttonElement en la propiedad de texto y agregando las clases typography-p, input-file y p-s al node. */
            this.prepareEvents();
            /* Al verificar si el botón está deshabilitado y si lo está, está eliminando la clase typography-p y agregando la
            clase typography-placeholder. */
            this.prepareDisabledState();
            /* Si el texto no está vacío y el icono está vacío, entonces el texto se establece en node. */
            this.prepareText();
            /* Establecer el atributo data-hidden-message en node. */
            if (this.hiddenMessage) {
                this.node.setAttribute('data-hidden-message', this.hiddenMessage);
            }
            return this;
        };
        /* Un método privado que se llama cuando se hace clic en el botón. */
        this.onDefaultClick = (event) => {
            if (this.onClick)
                this.onClick(event);
        };
        /* Un método privado que se llama cuando se hace clic en el botón. */
        this.onDefaultChange = (event) => {
            if (this.onChange)
                this.onChange(event);
        };
        this.asInput = (_a = options === null || options === void 0 ? void 0 : options.asInput) !== null && _a !== void 0 ? _a : false;
        this.disabled = (_b = options === null || options === void 0 ? void 0 : options.disabled) !== null && _b !== void 0 ? _b : false;
        this.rootElement = options === null || options === void 0 ? void 0 : options.rootElement;
        this.text = options === null || options === void 0 ? void 0 : options.text;
        this.icon = options === null || options === void 0 ? void 0 : options.icon;
        this.secondIcon = options === null || options === void 0 ? void 0 : options.secondIcon;
        this.classes = (_c = options === null || options === void 0 ? void 0 : options.classes) !== null && _c !== void 0 ? _c : [];
        this.hiddenMessage = options === null || options === void 0 ? void 0 : options.hiddenMessage;
        this.onClick = options === null || options === void 0 ? void 0 : options.onClick;
        this.onChange = options === null || options === void 0 ? void 0 : options.onChange;
        this.node = document.createElement(this.asInput ? 'input' : 'button');
        this.render();
    }
    prepareEvents() {
        var _a;
        if (this.node instanceof HTMLInputElement) {
            this.node.value = (_a = this.text) !== null && _a !== void 0 ? _a : '';
            this.node.classList.add('typography-p', 'input-file', 'p-s');
            /* Comprobando si la función onChange está definida y, si lo está, está agregando un detector de eventos al
            node. */
            if (this.onChange)
                this.node.addEventListener('input', this.onDefaultChange);
            /* Agregar la clase typography-link y l-height-reset al node. */
        }
        else if (this.node instanceof HTMLButtonElement) {
            this.node.classList.add('l-height-reset');
        }
    }
    prepareText() {
        if (this.text && !this.icon) {
            this.node.textContent = this.text;
            /* Comprobando si el texto está vacío y el icono no está vacío. */
        }
        else if (!this.text && this.icon) {
            const iconClassNames = this.icon
                .split(/(\s|,)/ig)
                .map((className) => className.trim())
                .filter((className) => !!className);
            this.node.classList.remove(...iconClassNames);
            if (this.node instanceof HTMLButtonElement) {
                this.node.textContent = '';
                if (this.icon)
                    this.node.classList.add(...iconClassNames);
            }
        }
    }
    prepareDisabledState() {
        var _a;
        if (this.disabled) {
            if (this.node instanceof HTMLInputElement) {
                this.node.disabled = (_a = this.disabled) !== null && _a !== void 0 ? _a : false;
                this.node.classList.remove('typography-p');
                this.node.classList.add('typography-placeholder');
            }
            else if (this.node instanceof HTMLButtonElement) {
                this.node.classList.remove('typography-link');
                this.node.classList.add('typography-placeholder');
            }
        }
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- scontreras
// WORKTEAM: ----- Onix
// version 1.0
/* Es una clase que crea un elemento span con una lista de clases y un detector de eventos. */
class InputIconComponent extends InputAbstractComponent {
    /**
     * La función constructora es una función que se llama cuando se crea una nueva instancia de la clase.
     * @param {InputIconComponentOptions} options - InputIconComponentOptions: este es el objeto de opciones que pasaremos
     * al constructor.
     */
    constructor(options) {
        var _a, _b, _c, _d;
        super();
        this.options = options;
        /* Un método que se llama cuando se crea una instancia de la clase. */
        this.render = () => {
            this.prepare();
            if (this.rootElement) {
                const rootElement = document.querySelector(this.rootElement);
                rootElement === null || rootElement === void 0 ? void 0 : rootElement.appendChild(this.node);
            }
            return this;
        };
        /* Agregar las clases al nodo. */
        this.prepare = () => {
            var _a, _b;
            this.node.classList.add(...(_a = this.classes) !== null && _a !== void 0 ? _a : []);
            this.node.classList.add(...(_b = this.iconClasses) !== null && _b !== void 0 ? _b : []);
            if (this.onDefaultClick)
                this.node.addEventListener('click', this.onDefaultClick);
            if (this.onChange)
                this.node.addEventListener('input', this.onDefaultChange);
            return this;
        };
        /* Un método que reemplaza las clases del nodo. */
        this.replaceNodeClasses = (...iconClasses) => {
            /* Convertir la lista de clases del nodo en una matriz de cadenas. */
            const oldIconClasses = classListToArray(this.node);
            /* Eliminando todas las clases del nodo. */
            this.node.classList.remove(...oldIconClasses);
            /* Agregar las clases al nodo. */
            this.node.classList.add(...iconClasses);
        };
        /* Un método privado que se llama cuando se hace clic en el botón. */
        this.onDefaultClick = (event) => {
            if (this.onClick)
                this.onClick(event);
        };
        /* Un método privado que se llama cuando se hace clic en el botón. */
        this.onDefaultChange = (event) => {
            if (this.onChange)
                this.onChange(event);
        };
        this.rootElement = (_a = options.rootElement) !== null && _a !== void 0 ? _a : '';
        this.iconClasses = (_b = options.iconClasses) !== null && _b !== void 0 ? _b : [];
        this.secondIconClasses = (_c = options.secondIconClasses) !== null && _c !== void 0 ? _c : [];
        this.classes = (_d = options.classes) !== null && _d !== void 0 ? _d : [];
        this.node = document.createElement("span");
        this.render();
    }
}

"use strict";
// REVISION ------ 1.0
// SP: ----------- CRI-025171
// DATE: --------- 10-02-2022
// DESCRIPTION: -- Define y crea los elementos para los mensajes de alerta
// AUTHOR: ------- scontreras
// WORKTEAM: ----- Onix
// version 1.0
class InputLabelComponent extends InputAbstractComponent {
    constructor(option) {
        var _a, _b, _c;
        super();
        this.option = option;
        this.prepare = () => {
            var _a;
            this.labelElement.classList.add(...(_a = this.classes) !== null && _a !== void 0 ? _a : []);
            if (this.for)
                this.labelElement.setAttribute('for', this.for);
            if (this.text)
                this.labelElement.textContent = this.text;
        };
        this.render = () => {
            this.prepare();
            if (this.rootElement) {
                const rootElement = document.querySelector(this.rootElement);
                if (rootElement)
                    rootElement.appendChild(this.labelElement);
            }
        };
        this.for = option === null || option === void 0 ? void 0 : option.rootElement;
        this.for = (_a = option === null || option === void 0 ? void 0 : option.for) !== null && _a !== void 0 ? _a : '';
        this.text = (_b = option === null || option === void 0 ? void 0 : option.text) !== null && _b !== void 0 ? _b : '';
        this.classes = (_c = option === null || option === void 0 ? void 0 : option.classes) !== null && _c !== void 0 ? _c : [];
        this.labelElement = document.createElement("label");
        this.render();
    }
}
