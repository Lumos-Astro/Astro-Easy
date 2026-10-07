/* OSCAR — Retro Arcade Theme behaviors: starfield backdrop + reveal-on-scroll. */
(function () {
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Starfield ── */
    var canvas = document.getElementById('starfield');
    if (canvas && !reduceMotion) {
        var ctx = canvas.getContext('2d');
        var w, h, stars, t = 0;

        function sizeCanvas() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }

        function makeStars() {
            var count = Math.min(220, Math.floor((w * h) / 8500));
            stars = [];
            for (var i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    r: Math.random() * 1.3 + 0.3,
                    phase: Math.random() * Math.PI * 2,
                    speed: Math.random() * 0.25 + 0.05,
                    drift: Math.random() * 0.12 + 0.02
                });
            }
        }

        function init() { sizeCanvas(); makeStars(); }

        function draw() {
            t += 0.02;
            ctx.clearRect(0, 0, w, h);
            for (var i = 0; i < stars.length; i++) {
                var s = stars[i];
                var b = 0.35 + 0.65 * Math.abs(Math.sin(t * s.speed * 6 + s.phase));
                ctx.fillStyle = 'rgba(210,230,255,' + b.toFixed(3) + ')';
                ctx.fillRect(s.x, s.y, s.r, s.r);
                s.y += s.drift;
                if (s.y > h) { s.y = 0; s.x = Math.random() * w; }
            }
            requestAnimationFrame(draw);
        }

        var resizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(init, 150);
        });

        init();
        draw();
    }

    /* ── Reveal on scroll (single staggered entrance) ── */
    var reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        if ('IntersectionObserver' in window && !reduceMotion) {
            var seen = 0;
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.transitionDelay = (seen % 4) * 70 + 'ms';
                        entry.target.classList.add('is-visible');
                        seen++;
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            reveals.forEach(function (el) { io.observe(el); });
        } else {
            reveals.forEach(function (el) { el.classList.add('is-visible'); });
        }
    }

    /* ── Language toggle (EN / PT) ── */
    var LANG_KEY = 'oscar-lang';

    function applyLanguage(lang) {
        document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt' : 'en');
        document.querySelectorAll('[data-en]').forEach(function (el) {
            var text = lang === 'pt' ? el.getAttribute('data-pt') : el.getAttribute('data-en');
            if (text !== null && text !== '') {
                el.innerHTML = text;
            }
        });
        document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    function getLangFromURL() {
        var v = new URLSearchParams(window.location.search).get('lang');
        return (v === 'pt' || v === 'en') ? v : null;
    }

    // Add/replace ?lang=... on a relative href without disturbing any other
    // query params (e.g. person.html?slug=x) or a #hash if present.
    function withLang(href, lang) {
        var hash = '';
        var hashIdx = href.indexOf('#');
        if (hashIdx !== -1) { hash = href.slice(hashIdx); href = href.slice(0, hashIdx); }
        var qIdx = href.indexOf('?');
        var base = qIdx !== -1 ? href.slice(0, qIdx) : href;
        var query = qIdx !== -1 ? href.slice(qIdx + 1) : '';
        var params = new URLSearchParams(query);
        params.set('lang', lang);
        return base + '?' + params.toString() + hash;
    }

    function rewriteInternalLinks(lang) {
        document.querySelectorAll('a[href]').forEach(function (a) {
            var href = a.getAttribute('href');
            if (!href || href.charAt(0) === '#') return;
            if (/^(https?:|mailto:|tel:|javascript:)/i.test(href)) return;
            if (a.getAttribute('target') === '_blank') return;
            a.setAttribute('href', withLang(href, lang));
        });
    }

    function setLanguage(lang) {
        try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
        applyLanguage(lang);
        rewriteInternalLinks(lang);
        try {
            var url = new URL(window.location.href);
            url.searchParams.set('lang', lang);
            window.history.replaceState(null, '', url.pathname + url.search + url.hash);
        } catch (e) {}
    }

    function initLangToggle() {
        var fromUrl = getLangFromURL();
        var saved = null;
        try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
        var lang = fromUrl || (saved === 'pt' ? 'pt' : 'en');

        setLanguage(lang);

        document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLanguage(btn.getAttribute('data-lang'));
            });
        });
    }

    initLangToggle();
})();
