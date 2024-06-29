export class TableSelection {
    static className = 'selected'

    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.clear()
        this.group.push($el)
        $el.focus().addClass(TableSelection.className)
        this.current = $el
    }

    get selectedIds() {
        return this.group.map($el => $el.id())
    }

    selectGroup($group = []) {
        this.clear()

        this.group = $group
        this.group.forEach($el => $el.addClass(TableSelection.className))
    }

    clear() {
        this.group.forEach($el => $el.removeClass(TableSelection.className))
        this.group = []
    }

    applyStyle(style) {
        this.group.forEach($el => $el.css(style))
    }
}