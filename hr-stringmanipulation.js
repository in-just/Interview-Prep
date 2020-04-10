function makeAnagram(a, b) {
    // create hashmap to track the number of letters in the string
    let tracker = {};
    for (let i = 0; i < a.length; ++i) {
        if (!tracker[a[i]]) {
            tracker[a[i]] = 0;
        }
        tracker[a[i]] += 1;
    }
    // check to see if exists in tracker, if doesn't add 1
    let deletions = 0;
    for (let i = 0; i < b.length; ++i) {
        if (tracker[b[i]] <= 0) {
            deletions += 1;
        }
        tracker[b[i]] -= 1;
    }
    return deletions;
}