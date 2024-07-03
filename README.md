# DSB Webkit
A collection of common DSB frontend functionality

## Installation
```npm i @dsb-norge/dsb-webkit```

## Styles
In `index.ts`
``` typescript
import '@dsbnorge/dsb-webkit/dsb-styles.css'
```

## Quasar
In `quasar-variables.sass`
``` scss
@import '@dsb-norge/dsb-webkit/quasar-variables.sass'
```

## I18N
In `@/plugins/i18n.ts`
``` typescript
import { mergeLocalizations } from '@dsb-norge/dsb-webkit/i18n.utils.ts'
import commonNbNO from '@dsb-norge/dsb-webkit/locales/nb-NO.json'
import nbNO from '@/locales/nb-NO.json'

const mergedNbNO = mergeLocalizations(commonNbNO, nbNO)
type MessageSchema = typeof mergedNbNO
```