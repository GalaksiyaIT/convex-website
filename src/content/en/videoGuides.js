// English text for the video guides, keyed by slug. Fields mirror the Turkish entries
// (title, module, thumbnailLabel, description, body, comingNext); `steps` is an array of
// caption strings in the same order as the Turkish `steps` (timings come from there).
import { iremVideoGuidesEn } from '@/content/en/iremVideoGuides'
import { legacyVideoGuidesEn } from '@/content/en/legacyVideoGuides'

export const videoGuidesEn = { ...iremVideoGuidesEn, ...legacyVideoGuidesEn }
