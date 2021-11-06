

const Wrapper = ({children}) => {
    return(
        <div className = 'max-w-1700px m-auto text-white'>
            <div className = 'px-5 sm:px-20 lg:px-32 xl:px-0 xl:ml-32 2xl:ml-48'>
                {children}
            </div>
        </div>
    )
}

export default Wrapper;