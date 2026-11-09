# Wiki log

Append-only. Newest entries at the bottom. Heading format:
`## [YYYY-MM-DD] ingest|query|lint|decision | title`

## [2026-10-23] decision | Adopt LLM Wiki pattern
Bootstrapped wiki from the shared template.

## [2026-10-23] ingest | Open-source dependency inventory
Added DEPENDENCIES.md following the OSS dependency guide; two fonts (OFL-1.1) and one icon glyph (MIT).

## [2026-10-29] ingest | OSS template compliance
- Added template files and license headers; CODEOWNERS team still a placeholder.

## [2026-10-29] decision | Standard CODEOWNERS for OSS requests
- Reuse the NZC-EasyAudit CODEOWNERS for all OSS requests.

## [2026-10-29] decision | License and governance confirmed
- Apache-2.0 and Salesforce Sponsored confirmed.

## [2026-11-02] ingest | Scrub internal info, align license with NZC-EasyAudit
- DEPENDENCIES.md: removed internal guide/contact references. LICENSE.txt replaced with NZC-EasyAudit's standard Apache-2.0 text; file headers now use NZC's SPDX `Apache-2.0` header.
- CODEOWNERS owner changed to @carlosvl; GUSINFO unchanged (team and tag verified in GUS), pending reviewer follow-up. Global skill `oss-codeowners` created.

## [2026-11-08] decision | Rewrite history to remove internal references
- Plain scrub commits left internal handles and contact names reachable in history, so the two commits after `4e69b14` were rewritten and `main` was force-pushed. Messages, authors and dates were kept; final tree differs only by dropping an internal phrase from `wiki/index.md`.
- Old commits may stay cached on GitHub by SHA and in existing clones or forks; only GitHub Support can purge them. Lesson: scrub before the first push, not after.
