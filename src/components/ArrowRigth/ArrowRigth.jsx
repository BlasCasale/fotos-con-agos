const ArrowRigth = ({ handleNext }) => {
    return (
        <button onClick={() => handleNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right-filled" width="56" height="56" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" strokeWidth="0" fill="currentColor" />
            </svg>
        </button>
    );
};

export default ArrowRigth;