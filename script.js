const getBookmarks = async () => {
  const bookmarks = await chrome.bookmarks.getTree();
  console.log(JSON.stringify(bookmarks, null, 2));
  const  newBookmarks = bookmarks.map(item => reformatBookmark(item))
  console.log(JSON.stringify(newBookmarks, null, 2));
};

const reformatBookmark = (bookmark) => {
  if (bookmark.children) {
    const children = bookmark.children.map(child => reformatBookmark(child) )
    return { ...bookmark, children , type: "folder" };
  } else {
    return { ...bookmark, type: "link" };
  }
};
getBookmarks();
