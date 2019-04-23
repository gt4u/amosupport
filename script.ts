export = class AmoHelper
{
    private static notDefineException(key: string)
    {
        return new Error(`${key} IS NOT DEFINED IN THE WINDOW`);
    }

    private static get window()
    {
        return window;
    }

    private static getProp(closure, key)
    {
        if (closure().hasOwnProperty('key'))
        {
            return closure()[key];
        }
        this.notDefineException(key);
    }

    static get amo(): object
    {
        return this.getProp(this.window, 'AMOCRM');
    }

    static get data(): object
    {
        return this.getProp(this.amo, 'data');
    }

    static get cardPage(): object
    {
        return this.getProp(this.data, 'card_page');
    }

    static get currentCard(): object
    {
        return this.getProp(this.data, 'current_card');
    }

    /**
     * 1 - contact; 2 - lead, 3 - company
     */
    static get cardElementType(): number
    {
        return this.getProp(this.currentCard, 'element_type');
    }

    static get cardId(): number
    {
        return this.getProp(this.currentCard,'id');
    }

    static get newCard(): boolean
    {
        return this.getProp(this.currentCard, 'new_card');
    }

    static get currentEntity(): string
    {
        return this.getProp(this.currentCard, 'current_entity');
    }

    static get entityChanged(): boolean
    {
        return this.getProp(this.currentCard, 'entity_changed');
    }

    static get isCard(): boolean
    {
        return this.getProp(this.currentCard, 'is_card');
    }

    static get pageChanged(): boolean
    {
        return this.getProp(this.currentCard, 'page_changed');
    }

    static get fromCard(): boolean
    {
        return this.getProp(this.currentCard, 'from_card');
    }
}