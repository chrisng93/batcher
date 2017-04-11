# Batcher

Soundcloud batch song downloader

## Table of Contents

1. [Getting Started](#Getting-Started)
2. [Tech Stack](#Tech-Stack)
3. [Contributing](#Contributing)
4. [License](#License)


## Getting started

#### 1. Clone the latest version

  Start by cloning the latest version of batcher and on your local machine by running:

  ```sh
  $ git clone https://github.com/chrisng93/batcher.git
  $ cd batcher
  ```

#### 2. Run frontend and backend

  Follow directions in the app and server directories to get those up and running

  After that open in your browser the localhost with your chosen port, e.g. ``` http://localhost:8080/ ``` to access the application.

#### 3. Download songs from your playlists

  - Sign into Soundcloud
  - Select the playlist which you want to download
  - Set the ID tags (artist and title)
  - Check the downloads folder in your server for mp3 files


## Tech Stack

##### Front End:
- React
- Redux
- Redux Thunk
- React-Router
- React-Router-Redux
- SASS

##### Back End:
- Node
- Express
- CasperJS

#### APIs:
- Soundcloud


## Contributing

  1. Fork the repo.
  2. Clone it to your local computer
  3. Cut a namespaced feature branch from master and name it appropriately
  4. Make commits and prefix each commit with the type of work you were doing
  5. BEFORE PUSHING UP YOUR CHANGES, rebase upstream changes into your branch, fix any potential conflicts, and then push to your fork.
  6. Submit a pull request directly to the master
  7. Someone else will perform code review to keep codebase clean
  8. Fix any errors or issues raised by the reviewer and push the fixes as a single new commit
  9. Repeat until the pull request is merged.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines in detail.


## License

M.I.T
