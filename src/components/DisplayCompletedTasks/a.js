import React from 'react';

const a = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 bg-gray-800 text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col bg-gray-900">
                            <a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Convenire</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default a;