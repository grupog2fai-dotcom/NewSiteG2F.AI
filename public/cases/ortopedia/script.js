/**
 * DR. FERNANDO GALHA — EDITORIAL AWWWARDS ENGINE
 * Interactive Anatomy Map, Showcase Tabs, Quiz Evaluator & Kinetic Letter Hover
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeroLetterHoverAnimation();
    initHeroAnatomyMap();
    initTreatmentTabs();
    initEvaluatorStepper();
    initEditorialFaq();
});

/* 0. Letter-by-Letter Kinetic Hover Lift for Hero Heading */
function initHeroLetterHoverAnimation() {
    const heading = document.getElementById('hero-heading-animated');
    if (!heading) return;

    // Preserve HTML structure (like <span class="highlight-italic">) while wrapping letters
    const nodes = Array.from(heading.childNodes);
    heading.innerHTML = '';

    nodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const words = node.textContent.split(' ');
            words.forEach((word, wIdx) => {
                if (word.length === 0) return;
                const wordSpan = document.createElement('span');
                wordSpan.className = 'hover-word';

                for (let i = 0; i < word.length; i++) {
                    const charSpan = document.createElement('span');
                    charSpan.className = 'hover-char';
                    charSpan.textContent = word[i];
                    charSpan.style.transitionDelay = `${i * 25}ms`;
                    wordSpan.appendChild(charSpan);
                }

                heading.appendChild(wordSpan);
                if (wIdx < words.length - 1) {
                    heading.appendChild(document.createTextNode(' '));
                }
            });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const isItalic = node.classList.contains('highlight-italic');
            const words = node.textContent.split(' ');

            const elemWrapper = document.createElement('span');
            if (isItalic) elemWrapper.className = 'highlight-italic';

            words.forEach((word, wIdx) => {
                if (word.length === 0) return;
                const wordSpan = document.createElement('span');
                wordSpan.className = 'hover-word';

                for (let i = 0; i < word.length; i++) {
                    const charSpan = document.createElement('span');
                    charSpan.className = 'hover-char';
                    charSpan.textContent = word[i];
                    charSpan.style.transitionDelay = `${i * 25}ms`;
                    wordSpan.appendChild(charSpan);
                }

                elemWrapper.appendChild(wordSpan);
                if (wIdx < words.length - 1) {
                    elemWrapper.appendChild(document.createTextNode(' '));
                }
            });

            heading.appendChild(elemWrapper);
        }
    });
}

/* 1. Hero Interactive Anatomy Hotspots */
function initHeroAnatomyMap() {
    const points = document.querySelectorAll('.anatomy-point');
    const cardTitle = document.getElementById('card-joint-title');
    const cardTag = document.getElementById('card-joint-tag');
    const cardDesc = document.getElementById('card-joint-desc');
    const cardDisplay = document.getElementById('joint-card-display');

    const dataMap = {
        joelho: {
            tag: "ARTICULAÇÃO EM FOCO: JOELHO",
            title: "Preservação Articular & Viscossuplementação",
            desc: "Tratamento de condropatia, lesões meniscais e gonartrose com infiltrações ultraguiadas de alta precisão e cirurgia minimamente invasiva por artroscopia."
        },
        ombro: {
            tag: "ARTICULAÇÃO EM FOCO: OMBRO",
            title: "Reparo do Manguito Rotador",
            desc: "Tratamento da síndrome do impacto, tendinites e instabilidade. Reconstrução artroscópica sem incisões abertas para recuperação do movimento de elevação."
        },
        quadril: {
            tag: "ARTICULAÇÃO EM FOCO: QUADRIL",
            title: "Impacto Femoroacetabular & Artroplastia",
            desc: "Preservação do labrum acetabular e substituição articular por próteses cerâmicas de altíssima durabilidade nos casos de coxartrose severa."
        }
    };

    points.forEach(pt => {
        pt.addEventListener('click', () => {
            const joint = pt.getAttribute('data-joint');
            const data = dataMap[joint];
            if (!data) return;

            points.forEach(p => p.classList.remove('active'));
            pt.classList.add('active');

            if (cardDisplay) {
                cardDisplay.style.opacity = '0';
                cardDisplay.style.transform = 'translateY(8px)';

                setTimeout(() => {
                    if (cardTag) cardTag.textContent = data.tag;
                    if (cardTitle) cardTitle.textContent = data.title;
                    if (cardDesc) cardDesc.textContent = data.desc;

                    cardDisplay.style.opacity = '1';
                    cardDisplay.style.transform = 'translateY(0)';
                }, 200);
            }
        });
    });
}

/* 2. Treatments Showcase Tabs */
function initTreatmentTabs() {
    const navBtns = document.querySelectorAll('.t-nav-btn');
    const panes = document.querySelectorAll('.tab-pane');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabTarget = btn.getAttribute('data-tab');

            navBtns.forEach(b => b.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPane = document.getElementById(`tab-${tabTarget}`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
}

/* 3. Evaluator Stepper */
function initEvaluatorStepper() {
    const evalState = { step1: '', step2: '', step3: '' };
    const steps = [
        document.getElementById('eval-step-1'),
        document.getElementById('eval-step-2'),
        document.getElementById('eval-step-3'),
        document.getElementById('eval-step-result')
    ];

    const progressBar = document.getElementById('eval-progress');
    const counterLabel = document.getElementById('eval-step-counter');
    const optBtns = document.querySelectorAll('.opt-btn');
    const waLink = document.getElementById('eval-wa-link');
    const resultText = document.getElementById('eval-result-text');

    optBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const stepNum = parseInt(btn.getAttribute('data-step'));
            const val = btn.getAttribute('data-val');

            if (stepNum === 1) evalState.step1 = val;
            if (stepNum === 2) evalState.step2 = val;
            if (stepNum === 3) evalState.step3 = val;

            goToStep(stepNum + 1);
        });
    });

    function goToStep(targetStep) {
        steps.forEach((st, idx) => {
            if (st) st.classList.toggle('active', idx === targetStep - 1);
        });

        if (targetStep <= 3) {
            const pct = (targetStep / 3) * 100;
            if (progressBar) progressBar.style.width = `${pct}%`;
            if (counterLabel) counterLabel.textContent = `Passo ${targetStep} de 3`;
        } else {
            if (progressBar) progressBar.style.width = '100%';
            if (counterLabel) counterLabel.textContent = `Análise Concluída`;
            renderResult();
        }
    }

    function renderResult() {
        const msg = `Olá Dr. Fernando Galha, realizei a auto-avaliação no site.\n\n- Queixa principal: ${evalState.step1}\n- Tempo de evolução: ${evalState.step2}\n- Impacto funcional: ${evalState.step3}\n\nGostaria de agendar uma consulta de avaliação.`;
        const encoded = encodeURIComponent(msg);

        if (waLink) {
            waLink.href = `https://wa.me/5511962236635?text=${encoded}`;
        }

        if (resultText) {
            resultText.textContent = `Sua avaliação indicou desconforto em [${evalState.step1}], com evolução [${evalState.step2}] e severidade [${evalState.step3}]. Recomendamos uma consulta presencial com o Dr. Fernando Galha para realização de testes ortopédicos específicos.`;
        }
    }
}

/* 4. Editorial FAQ Accordion */
function initEditorialFaq() {
    const rows = document.querySelectorAll('.faq-row');

    rows.forEach(row => {
        const btn = row.querySelector('.faq-btn');
        btn.addEventListener('click', () => {
            const isActive = row.classList.contains('active');
            rows.forEach(r => r.classList.remove('active'));
            if (!isActive) {
                row.classList.add('active');
            }
        });
    });
}
