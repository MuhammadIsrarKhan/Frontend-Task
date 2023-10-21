import InfoIcon from '@/assets/infoIcon.svg'
const ErrorMsg = ({message}) => {
  return (
    <div
      key="message"
      class="w-full rounded-[4px] bg-[#3E1F99] bg-opacity-20 min-h-[38px] mb-4 flex gap-[9px] items-center mt-3 pl-2"
    >
      <img
        src={InfoIcon}
        alt="info Icon"
        class="w-[20px] h-[20px] ltr:ml-3 rtl:mr-3"
      />
      <p class="text-sm font-medium leading-[150%] font-PlusJakarta text-[#3E1F99]">
        {message}
      </p>
    </div>
  );
};

export default ErrorMsg;
