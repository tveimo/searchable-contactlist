# Searchable List Component - aXcelerate

Code submission by Torgeir Veimo, thor at pobox dot com. This repo will be made private after review.

## Instructions

1. Run `yarn install` to download dependencies.
2. Test app by running `yarn dev`.
3. Consult storybook docs and reference by running `yarn storybook`.

## Some notes

I chose not to separate the contact list into a section header and section, as it would complicate the selection handling with callbacks and state handling a bit.

Not all the CSS is 100% as per design in the figma document. I haven't added responsive styling, as this seems to be missing from the figma document.

I used a literal json array as a source for the contact list, a real implementation would fetch by API and leave the filtering to the API endpoint. It would be easy to replace the simple filtering mechanism with one that passes the filter to an API and re-fetches the data when the search field changes.

I might have misunderstood a bit the selection mechanism in the contact lists, in case it where to be possible to move students between the attended and absent category.


