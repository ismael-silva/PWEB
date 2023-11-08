const showInfo = () => {
    const select = document.querySelector('select');
    const selected = select.options[select.selectedIndex];
    const courseName = selected.text;
    const url = selected.getAttribute('data-url');
    const confirmation = confirm(`Gostaria de abrir informações detalhadas do curso: ${courseName}?`);

    if (confirmation) {
        const width = 600;
        const height = 300;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;

        const newWindow = window.open("", "newWindow", `width=${width}, height=${height}, left=${left}, top=${top}`);
        newWindow.document.open();
        newWindow.document.write(`<h2>Informações detalhadas do curso: ${courseName}</h2>`);
        newWindow.document.write(`<iframe src="${url}" style="width: 100%; height: 100%;"></iframe>`);
        newWindow.document.close();
        newWindow.focus();
    }
};

const select = document.querySelector('select');
select.addEventListener('change', showInfo);
