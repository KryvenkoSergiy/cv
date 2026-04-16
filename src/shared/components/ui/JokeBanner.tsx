import { PDFDownloadLink } from "@react-pdf/renderer";
import { CvDocument } from "../../../features/pdf/CvDocument";

interface JokeBannerProps {
  emoji: string;
  title: string;
  joke: string;
  buttonLabel: string;
  loadingLabel?: string;
}

export const JokeBanner = ({
  emoji,
  title,
  joke,
  buttonLabel,
}: JokeBannerProps) => (
  <div className='bg-purple-600/10 rounded-2xl px-5 py-4 mb-8 flex items-center justify-between gap-4 flex-wrap border border-purple-500/20'>
    <div>
      <p className='text-white/70 text-sm font-medium'>
        {emoji} {title}
      </p>
      <p className='text-white/40 text-sm mt-0.5'>{joke}</p>
    </div>
    <PDFDownloadLink
      document={<CvDocument />}
      fileName='Sergii_Kryvenko_CV.pdf'
      className='shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/50'
    >
      <svg
        className='w-3.5 h-3.5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'
        />
      </svg>
      {buttonLabel}
    </PDFDownloadLink>
  </div>
);
