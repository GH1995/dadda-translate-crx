/**
 * Since the result from Sougou is supremely complex
 * a lot of interfaces below have been parted from
 * you don't have to understand every interface for composing a picture in ur mind
 * just inspect the sample object at the end of the file if you want
 */
import { EPhoneticTypes } from './dadda'

interface IOxfordDetailOrExample {
  en: string
  zh: string
}

interface IOxfordItemCore {
  detail: IOxfordDetailOrExample
  example: IOxfordDetailOrExample[]
}

interface IOxfordItem {
  core: IOxfordItemCore[]
  pos: string
}

interface IOxfordContent {
  item: IOxfordItem
}

interface IOxfordPhonetic {
  filename: string
  text: string
  type: EPhoneticTypes
}

interface IOneOfOxfordTranslation {
  content: IOxfordContent[]
  origin: string[]
  usual: { pos: string; values: string[] }[]
  phonetic: IOxfordPhonetic[]
}

interface IOxfordResult {
  content: IOneOfOxfordTranslation[]
}

interface ISougouSimpleTranlate {
  text: string
  dit: string
}

export interface ISougouTranslateResult {
  dictionary?: IOxfordResult
  isHasOxford: boolean
  translate: ISougouSimpleTranlate
}

// Suppose the source is English, the target is Chinese
// tslint-disable-next-line 
const SougouTranslateResultSample: ISougouTranslateResult = {
  // `dictionary` field existed only when isHasOxford === true
  dictionary: {
    content: [
      {
        content: [
          {
            item: {
              core: [
                {
                  detail: { zh: '对应的中文定义', en: 'an English definition' },
                  example: [
                    {
                      zh: '这个释义的例句中文翻译',
                      en: 'an English expample of this defination'
                    }
                  ]
                }
              ],
              pos: 'part of speach'
            }
          }
        ],
        origin: [''],
        usual: [
          {
            pos: 'n.',
            values: ['']
          }
        ],
        phonetic: [
          {
            filename: '//xx.com/deduce.mp3',
            text: 'dɪˈdjuːs',
            type: EPhoneticTypes.uk
          }
        ]
      }
    ]
  },
  isHasOxford: true,
  translate: {
    text: 'deduce',
    dit: '推断'
  }
}
