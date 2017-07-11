# Strip Trailing Slashes

A function that removes all slashes from the end of a string.

This function:

-   makes no assumptions about the kind of slash (forward `/` or backward `\`)
-   does not care what the current operating system or file system is
-   does not care what the operating system or file system was for the string's source
-   does not distinguish between file system path, a URL, or any other kind of string

If there is one or more slashes at the end of a string, they get removed.

That is all there is to it.

## API

### stripTrailingSlashes(text)

#### text

Type: `String`

The string of text you want to remove trailing slashes from. If this is not a string, it will throw a TypeError.
