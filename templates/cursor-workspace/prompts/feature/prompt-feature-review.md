# Prompt: revisión de feature (post-implementación)

**Goal:** Review the implementation as a careful peer: correctness, security, maintainability, and alignment with project rules and the stated story.

**Please:**

- Compare the diff against: `@cursor/analysis/features/<feature-slug>/user-story.md` (or the stated acceptance criteria) and `@cursor/analysis/shared/review-guidelines.md`.
- Check adherence to: `@.cursor/rules/backend-serverless.mdc` (if backend/API), `@.cursor/rules/frontend-react.mdc` (if UI), `@.cursor/rules/infrastructure-terraform.mdc` (if infra), `@.cursor/rules/core-standards.mdc`.
- Call out: missing tests, missing or outdated API/business docs, logging/error handling, secret handling, and cross-stack impact (frontend services, types, mocks, E2E).
- Suggest **concrete** follow-ups (file + change), prioritized; separate must-fix from nice-to-have.

**User fill-in:**

- **Feature / slug:** …
- **PR / branch / archivos clave a revisar:** …
