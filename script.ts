import $ = require('jquery');

export = class AmoHelper
{

    static get amo()
    {
        if (window.hasOwnProperty('AMOCRM'))
        {
            return window.AMOCRM;
        }
        throw 'AMOCRM IS NOT DEFINED IN THE WINDOW';
    }

    static get data()
    {
        return this.amo.data
    }

    get
}