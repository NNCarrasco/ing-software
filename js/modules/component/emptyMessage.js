function constructEmptyMessage(key) {
    let emptyMessage = `
        <div class="message">
            <span>No hay contenido</span>
        </div>
    `// FIXME: 'No hay contenido' string hardcode => should be a translatable variable
    $(key).append(emptyMessage);
}
export default constructEmptyMessage;