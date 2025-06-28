import React from "react";

export default function GalleryLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}

// import React from "react";

// export default function GalleryLayout(props: {
//   children: React.ReactNode;
//   modal?: React.ReactNode;
// }) {
//   return (
//     <>
//       {props.children}
//       {props.modal}
//     </>
//   );
// }
