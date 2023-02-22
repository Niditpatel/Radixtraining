import Post from './Post';
export default function PostList(props) {
    const PostList = [
        {
            Id: 0,
            PostName: 'Backpack',
            PostDescription: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
            PostedDate: new Date('12-10-2022'),
            PostedImage: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        },
        {
            id: 1,
            PostName: 'T-Shirt',
            PostDescription: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket,  soft fabric for breathable and comfortable wearing',
            PostedDate: new Date('10-25-2022'),
            PostedImage: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
        },
        {
            id: 2,
            PostName: 'Jacket',
            PostDescription: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working , traveling or other',
            PostedDate: new Date('12-08-2022'),
            PostedImage: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
        },
        {
            id: 3,
            PostName: 'Bracelet',
            PostDescription: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl",
            PostedDate: new Date('09-15-2022'),
            PostedImage: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
        },
        {
            id: 4,
            PostName: 'Internal SSD',
            PostDescription: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5',
            PostedDate: new Date('11-03-2022'),
            PostedImage: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'
        },
        {
            id: 5,
            PostName: 'T-Shirt',
            PostDescription: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch',
            PostedDate: new Date('01-01-2022'),
            PostedImage: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
        }
    ];
    const addlikes = (item) => {
        props.addlikes(item);
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mx-auto w-fit">

                {PostList.map(item =>
                    <Post item={item} addlikes={addlikes} likepostlist={props.likepostlist} verify={props.Verify}></Post>
                )}
            </div>
        </div>
    )
}