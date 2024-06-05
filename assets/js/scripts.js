const intro = `
We are JokerOutSubs, a fan led group dedicated to translating and captioning Slovenian content from the band, Joker Out, into multiple global languages.
- [Our Info](https://github.com/Joker-Out-Subs)
- [General and business inquiries](mailto:jokeroutsubs@gmail.com)

### View our work
- [Original Content](https://www.youtube.com/playlist?list=PLtFmmB-vwS1_nyNu9dfRE2LOKa8ePAWXw)
- [Podcast](https://podcasters.spotify.com/pod/show/jokeroutsubs-podcasts)
- [Linktree](https://linktr.ee/jokeroutsubs)
`

const socials = `
### Find us on social media!
- [YouTube](https://www.youtube.com/@JokerOutSubs)
- [Instagram](https://www.instagram.com/joker.out.subs)
- [Twitter](https://twitter.com/jokeroutsubs)
- [Tumblr](https://jokeroutsubs.tumblr.com/)
- [TikTok](https://www.tiktok.com/@jokeroutsubs)
- [Facebook](https://www.facebook.com/jokeroutsubs)
- [Twitch](https://www.twitch.tv/jokeroutsubs)
`;
// DOMPurify.sanitize(marked.parse(`<img src="x" onerror="alert('not happening')">`));
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('markdown-intro').innerHTML = DOMPurify.sanitize(marked.parse(intro));
    document.getElementById('markdown-socials').innerHTML = DOMPurify.sanitize(marked.parse(socials));
});
