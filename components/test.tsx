// This file is For the TSX formatting
export const Welcome = () =>{
    console.log("Welcome From my Doc")
}

export const truncate = (text = '', max = 1) => {
    const arr = text.trim().split(' ');
    return arr.length > max ? arr.splice(0, max).join(' ') + '...' : text;
}

function BlogCard() {
    const content = "HTML conents responsed back from Server Here...";

    return (
        <div
            dangerouslySetInnerHTML={{
                __html: content.length > 100 ? truncate(content?.slice(0, 60)) + '...' : truncate(content)
            }}
        />
    )
}