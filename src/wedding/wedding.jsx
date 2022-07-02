import { useTranslation } from 'react-i18next';
import './wedding.scss';
import Moment from 'react-moment';

const Wedding = (e)=>{
    const { t, i18n } = useTranslation();

    const changelanguage = (e) =>{
        if(e.target.value !== 'na'){
            i18n.changeLanguage(e.target.value);
        }
    }
    return (
        <div className='wedding-container'>
            <select className='lang-container' onChange={(e) => changelanguage(e)}>
                <option value='na'>Select Your Preferred Language</option>
                <option value='en'>English</option>
                <option value='hindi'>Hindi</option>
                <option value='odia'>Odia</option>
            </select>
            <div className='inner-container'>
                <div className='content'>
                    <h2 className='title'>{t('Save the Date')}</h2>
                    <h2 className='title'>{t('Bride Name')} </h2>
                    <h2 className='title special'> {t("and")} </h2>
                    <h2 className='title' style={{marginTop: 10}}> {t("Groom Name")}</h2>
                    <h4 className='title'> {t("Are Getting Married")}</h4>
                    <h4 className='title special'> {t("on")} </h4>
                    <h3 className='title special'> {t("mrg Date")} </h3>
                    <h4 className='title'> (<Moment diff={new Date()} unit="days">2023-01-17</Moment> {t("remaining Days")} )</h4>
                </div>
            </div>
        </div>
    );
}

export default Wedding;