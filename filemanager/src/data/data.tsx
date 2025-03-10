interface FolderProps {
    name: string,
    folders?: FolderProps[]
}

const folders: FolderProps[] = [
    {
      name: "Home",
      folders: [
        {
          name: "Movies",
          folders: [
            {
              name: "Action",
              folders: [
                {
                  name: "2000",
                  folders: [
                    { name: "Mission-Impossible.mp4" },
                    { name: "X-Men.mp4" },
                  ],
                },
                { name: "2002", folders: [] },
              ],
            },
            { name: "Comedy", folders: [] },
          ],
        },
        {
          name: "Music",
          folders: [
            { name: "Classical", folders: [] },
            { name: "Pop", folders: [] },
          ],
        },
        {
          name: "Pictures",
          folders: [
            { name: "Trip", folders: [] },
            { name: "School", folders: [] },
          ],
        },
        { name: "Documents", folders: [{ name: "password.tsx" }] },
      ],
    },
  ];

  export default folders;