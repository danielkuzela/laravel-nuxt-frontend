# View Moduly

- Moduly používáme tak, jak jsme byli zvyklí.
- Pro správné použití postupujeme následovně:
  - vytvoříme modul v adminu
  - ve složce `/components/modules/view` vytvoříme nový modul jako NázevModulu
  - uvnitř .vue souboru definujeme jeho slug jako `searchable_name`
  - v souboru `/components/modules/View.vue` naimportujeme daný soubor a přidáme do seznamu v `const components` - bez tohoto nebude fungovat
  - **PRO ZOPAKOVÁNÍ A POCHOPENÍ**: soubory komponent .vue mají vždy názvy s kapitálkami, čili pokud vytvoříme view modul např. `basic_hero`, název .vue souboru bude `BasicHero.vue` - až uvnitř souboru definujeme jeho slug `basic_hero` v export defaultu jako `searchable_name`