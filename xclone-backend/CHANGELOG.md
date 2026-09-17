# Changelog

## [Unreleased]
### Added
- Setup `Swagger UI` via `drf_spectacular` for API Documentation.
- `Tweet` model and feed list view (`/api/tweets/`).
- Added `TweetMedia` model to manage media files for the `Tweet` Model.
- Added auth settings for registration, data protection with fields like AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated
- Added authentication module
- Configured allauth for auth mails

### Changed
- Updated `Tweet` model to include media.
- Setup multimedia selector inside `Tweet` model.
- Added protected views for tweets
- Setting up sendGrid for sending emails

### Future Update