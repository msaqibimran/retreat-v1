import { Image } from "@shopify/hydrogen";
import { images } from '~/config/images';

export const Heading = () => (
    <div className="font-sora_bold flex-wrap flex justify-center lg:text-[72px] md:text-[40px] text-[32px] font-semibold gap-2">
        <div>
            <span className="text-c_333333 leading-[90.72px]">This weeks</span>
        </div>
        <div>
            <div>
                <span className="text-c_ED1651  leading-[90.72px]">
                    Featured reading
                </span>
            </div>
            <div>
                <Image src={images.lineUnderHeading} />
            </div>
        </div>
    </div>
);