# Google Analytics

Modul je defaultně plně připraven, stačí do .env nastavit správné ID měření. Měření je propojeno s cookie, bez něj samozřejmě neběží. Chování viz. nastavení pluginu v `plugins/analytics.client.ts`

## Note

Ensure that the Enhanced measurement feature is enabled to allow Gtag to automatically track page changes based on browser history events in Nuxt.

### To enable this feature:
- Go to the GA4 reporting view and click on “Admin”
- Select “Data Streams” under the “Property” column.
- Click on your web data stream.
- Next, toggle the switch button near “Enhanced measurement”