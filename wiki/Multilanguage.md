# Nuxt Multilanguage

Nuxt automaticky parsuje celou **pages** directory díky vue-routeru.

### Díky modulu i18n pak můžeme:
- tvořit překlady pro texty do templatu
- upravovat router - čili upravovat názvy složek pro jednotlivé lokalizace (clanky -> articles)

### Co je nutné vědět:
- Modul si sám ovládá přepínání jazyků.
- Defaultně se pracuje se subsložkama, čili čeština je bez subsložky, ostatní jazyky jsou pod /en/ atd.
- Správnému průchodu webu pomáhá NuxtLinkLocale. **Nepoužíváme žádné `<a href>` atp.**
- Router konfigurujeme přes nuxt.config.ts
- !!! Konfigurace musí obsahovat všechny potřebné složky, které budeme používat
- Lokalizace přidáváme do config/locales (nezapomneout v případě nutnosti na i18n.config.ts)