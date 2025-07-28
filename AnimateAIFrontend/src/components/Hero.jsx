import {Sparkles, Wand2, Play} from 'lucide-react'
import { useState } from 'react';
import Button from './ui/button'

const Hero = () => {
    const [prompt, SetPrompt] = useState("");
    const [isGenerating, SetIsGenerating] = useState(false);

    const handleGenerate = () => {
        console.log("video generate called")
        //openai api call to generate code for video generation library
        if(!prompt.trim()) return;

        SetIsGenerating(true);
        //Temp
        setTimeout(() => {
            SetIsGenerating(false);
        }, 3000);
    }

    const handlePromptChange = (prompt) => {
        console.log(prompt)
        SetPrompt(prompt);
    }

    return(
        <section className='pt-24 pb-12 lg:pt-32 lg:pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='max-w-4xl mx-auto text-center'>
                    {/* Badge */}
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 text-purple-700 text-sm font-medium mb-8'>
                        <Sparkles  className='w-4 h-4'/>
                        AI-Powered Video Generation
                    </div>
                    {/* Headling */}
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
                        Creating Amazing Animated Videos with{" "}
                        <span className='bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                            Just a Prompt
                        </span>
                    </h1>
                    {/* Subheadline */}
                    <p className='text-xl text-gray-600 mb-12 max-w-2xl mx-auto'>
                        Transform your ideas into stunning videos  using advanced AI. Just describe what you want, and watch your vision come to life.
                    </p>
                    {/* Video generation interface */}
                    <div className='max-w-3xl mx-auto mb-12'>
                        <div className='bg-white rounded-2xl shadow-2xl p-8 border border-gray-200/50'>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <div className='flex-1'>
                                    <input 
                                        placeholder='Describe the video you want to create...'
                                        value={prompt}
                                        onChange={(e) => {handlePromptChange(e.target.value)}}
                                        className='w-1/1 md:w-md pl-2 h-14 text-lg border-2 border-gray-200 focus-border-purple-400 rounded-xl'
                                        onKeyPress={(e)=>{e.key === 'Enter' && handleGenerate()}}
                                    />     
                                </div>
                                <Button
                                    onClick={() => {handleGenerate()}}
                                    disabled={!prompt.trim() || isGenerating}
                                    className="flex items-center cursor-pointer h-14 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:from-purple-600 text-white rounded-xl font-semibold"
                                >
                                    {isGenerating ? (
                                        <>
                                            <Wand2 className="w-5 h-5 mr-2 animate-spin"/>
                                            Generating...
                                        </>
                                    ):(
                                        <>
                                            <Play className='w-5 h-5 mr-2'/>
                                            Generate Video
                                        </>
                                    )}
                                </Button> 
                            </div>
                            {/* Example prompts */}
                            <div className='mt-6'>
                                <p className='text-sm text-gray-500 mb-6'>Try these examples.</p>
                                <div className='flex flex-wrap gap-2'>
                                    {[
                                        "A circle bouncing from left to right.",
                                        "A square coming out of a triangle and getting bigger."
                                    ].map((example) => (
                                        <button 
                                            key={example}
                                            onClick={() => {SetPrompt(example)}}
                                            className='px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors'
                                        >
                                            {example}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Generated video preview */}
                        {isGenerating && (
                            <div className='mt-8'>
                                <div className='bg-white rounded-2xl shadow-xl p-8 border-gray-200/50'>
                                    <div className='aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center'>
                                        <div className='text-center'>
                                            <Wand2 className='w-12 h-12 text-purple-500 mx-auto mb-4  animate-spin' />
                                            <p className='text-lg font-semibold text-gray-700'>Generating your video...</p>
                                            <p className='text-sm text-gray-500 mt-2'>This usually takes little time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;