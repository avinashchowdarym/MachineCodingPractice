import MarkdownPreview from '@uiw/react-markdown-preview';

const Review = ({isGenerating , review} : {isGenerating : boolean ; review: string}) => {
    return (
        <div className="w-6/12 h-full relative">
            {!isGenerating && <MarkdownPreview source={review} style={{height:'100vh' , fontSize: '32px'}}/>}
        </div>
    )
}

export default Review;