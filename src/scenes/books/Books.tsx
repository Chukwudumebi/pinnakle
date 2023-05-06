// import React from 'react';
// import { BookType } from '@/shared/types';

// interface CardProps {
//   book: BookType;
// }

// const Books: React.FC<CardProps> = ({ book }) => {
//   return (
//     <div className="rounded-lg overflow-hidden p-3 bg-gray-100 border shadow-sm mb-5">
//       <button className="bg-green-600">
//         Get it by {book.date2Buy}
//       </button>
//       <div className="h-80">
//         <img className="h-full w-full" src={book.image} alt="book cover" />
//       </div>
//       <p>{book.price}</p>
//     </div>
//   );
// };

// export default Books;

import React from "react";
import { BookType } from "@/shared/types";

interface CardProps {
  book: BookType;
}

const Books: React.FC<CardProps> = ({ book }) => {
  return (
    <div className="mb-5 flex overflow-hidden rounded-lg border bg-white p-1 shadow-sm">
      <div className="h-80 w-80">
        <img className="h-full w-full" src={book.image} alt="book cover" />
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <div>
          <p className="text-lg font-bold">{book.certification}</p>
          <p className="text-sm text-gray-500">Price: {book.price}</p>
        </div>
        <button className="rounded-lg bg-secondary-400 px-2 py-2">
          Get it by {book.date2Buy}
        </button>
      </div>
    </div>
  );
};

export default Books;

        "gray-100":  "#9E9E9E",
        "gray-500": "#424242",
        "primary-100": "#c7d1da",
        "primary-300": "#648096",
        // "primary-300": "#183557",
        "primary-500": "#00ADEE",
        // "primary-500": "#080b53",
        // "primary-500": "#d608a7",
        "secondary-400": "#0070C0",