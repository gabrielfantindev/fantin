document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('toggle-theme');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function() {
            document.body.classList.toggle('light', this.checked);
        });
    }

    // Corrige idade dinâmica
    const nascimentoAno = 2006; // seu ano de nascimento
    const nascimentoMes = 1;    // mês do nascimento (janeiro = 1)
    const nascimentoDia = 5;    // dia do nascimento

    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimentoAno;
    if (
        hoje.getMonth() + 1 < nascimentoMes ||
        (hoje.getMonth() + 1 === nascimentoMes && hoje.getDate() < nascimentoDia)
    ) {
        idade--;
    }
    const idadeSpan = document.getElementById('idade');
    if (idadeSpan) {
        idadeSpan.textContent = idade;
    }
});
