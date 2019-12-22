// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// COMPONENTS
import Paragraph from './components/Paragraph'
import Image from './components/Image'
import PageLink from './components/PageLink'
import WebLink from './components/WebLink'
import Separator from './components/Separator'
import Italic from './components/Italic'
// IMAGES
import book from '../Images/book.jpg'
import mail from '../Images/mail.png'
import screen1 from '../Images/screen1.png'
import screen2 from '../Images/screen2.png'

const ContentElement = styled.div`
	margin: 0 auto;
	max-width: 1500px;
	background-color: #fff;
	min-height: 1000px;
	padding: 20px;
`

class Content extends Component {
	render() {
		return (
			<ContentElement>
				<Paragraph
					content="Pytacie co u mnie..."
				/>
				<Paragraph
					center
					content={
						<span>
							"łzy ułożone na półce<br/>
							smutek równo stoi na biurku<br/>
							ból poskładany w szufladzie<br/>
							gniew wisi w szafie<br/>
							nadzieja już w koszu"
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							Czemu cisza na blogu..?<br/>
							[ze zdrowiem okej]<br/>
							Mój kolejny wpis miał dotyczyć książki M. Ziernickiego "Pomimo wszystko" - zatem POMIMO WSZYSTKO,<br/>
							takowy się tu ukazuje.<br/>
							Chociaż ze sporym opóźnieniem, no i wygląda on zupełnie inaczej, niż początkowo zakładałam...
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							A o co chodzi?<br/>
							Już wyjaśniam...
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							Z niecierpliwością oczekiwałam premiery tej książki. Gdy tylko dowiedziałam się, że jest już w sprzedaży, zamówiłam dla siebie egzemplarz na stronie Empiku. Po paru dniach odebrałam stacjonarnie w księgarni. Ten moment, gdy z ekscytacją rozrywam opakowanie i patrzę na pierwszą stronę... ostatnią. Przekartkowałam w pośpiechu. Raz jeszcze... Niedowierzanie. Serce zaczyna mocniej, coraz mocniej bić. I dopiero po paru chwilach zdaję sobie sprawę: TU NIC NIE MA.
						</span>
					}
				/>
				<Image src={book} />
				<Paragraph
					content={
						<span>
							Pan Marcin Ziernicki, choć właściwie powinnam pisać Marcin, bo przeszliśmy na "ty", napisał do mnie po raz pierwszy 3 grudnia 2017 roku. Dosyć dawno temu, gdy ja byłam jeszcze stosunkowo słaba.
						</span>
					}
				/>
				<Image src={mail} />
				<Paragraph
					content={
						<span>
							Mówiąc w skrócie: dziennikarz, początkujący pisarz. Pracował wówczas nad swoim debiutem - powieścią obyczajową, w której u głównej bohaterki zdiagnozowano ostrą białaczkę szpikową.
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							Zaproponował mi współpracę.
						</span>
					}
					underline
				/>
				<Paragraph
					content={
						<span>
							"Trudności nastręcza mi borykanie się ze szczegółami związanymi ze szpitalną codziennością czy też terapią w walce z białaczką. Nie mam takich doświadczeń i nie jest mi łatwo o tym pisać, w związku z czym chciałbym Cię prosić, abyś została moim ekspertem ;) Z ogromną ochotą zamieszczę odpowiednią notkę w książce o Tobie. Co ty na to?"
						</span>
					}
					italic
				/>
				<Paragraph
					content={
						<span>
							Inny fragment, z późniejszej naszej konwersacji tj. marzec 2019.:
						</span>
					}
					noSpace
				/>
				<Paragraph
					content={
						<span>
							"Tak sobie pomyślałem, że może przed wydaniem chciałabyś rzucić okiem na te fragmenty, w których zaczerpnąłem informacje od Ciebie? [...] Jeżeli się zgodzisz bardzo chętnie zamieszczę specjalne podziękowanie. Byłbym zaszczycony."
						</span>
					}
					italic
				/>
				<Paragraph
					content={
						<span>
							Oczywiście zgodziłam się. Zarówno na pierwszą jak i drugą propozycję. Początkowo pytał głównie o uczucia, jakie myśli siedziały mi w głowie, gdy to wszystko się działo. O te najbardziej prywatne wspomnienia, momenty, kiedy miałam wszystkiego dość i na niczym mi nie zależało. W późniejszym etapie wysłał mi na maila kilka rozdziałów (dot. wątku związanego z białaczką) - w sumie ok. 80 stron. Przeczytałam wszystko. Komunikowaliśmy się przez Messengera - opiniowałam, pisałam co moim zdaniem mógłby pozmieniać, co nie do końca jest zgodne z rzeczywistością albo po prostu mało prawdopodobne, aby wydarzyło się w śluzie przeszczepowej. Chodziło przede wszystkim o błędy merytoryczne. Był zachwycony moimi uwagami.
						</span>
					}
				/>
				<Image src={screen1} />
				<Image src={screen2} />
				<Paragraph
					content={
						<span>
							Wysyłałam mu nawet zdjęcia z mojego telefonu, aby mógł zobaczyć jak wygląda śluza przeszczepowa... Jak ubrana była moja mama siedząc przy mnie... W dobrej wierze.
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							Cóż...
						</span>
					}
					noSpace
				/>
				<Paragraph
					content={
						<span>
							Nie wywiązał się z umowy. 
						</span>
					}
					underline
					noSpace
				/>
				<Paragraph
					content={
						<span>
							Nie zamieścił żadnej adnotacji o tym, że mu pomagałam ani o tym, że korzystał z tego bloga.
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							Czuję się OSZUKANA.
						</span>
					}
					underline
				/>
				<Paragraph
					content={
						<span>
							Książka się ukazała. Ponad 500 stron. Dostępna w prawie wszystkich księgarniach. Opinie bardzo dobre, 5/5.
						</span>
					}
				/>
				<Separator />
				<Paragraph
					content={
						<span>
							"Spojrzała ostentacyjnie w okno i założyła ręce na piersi. W szybie było pęknięcie. Zastanawiała się już kilkakrotnie, co go spowodowało. Może któryś z uprzednich pacjentów, doprowadzony do ostateczności, chciał popełnić samobójstwo i wyskoczyć przez okno? (…) Atmosfera zgęstniała i nawet pracująca na okrągło klimatyzacja nie była w stanie jej rozrzedzić. "
						</span>
					}
					italic
					noSpace
				/>
				<Paragraph
					content={
						<span>
							cytat z książki ze str. 445
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							Jest to jeden z dowodów na to, że korzystał z mojego bloga.<br/>
							O pękniętej szybie piszę w <PageLink to="/" content="Śluza [izolatka] przeszczepowa" /> (wpis z dnia 14 grudnia 2016r.)
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							"Ilość aplikowanych toksyn i różnego rodzaju chemikaliów jest wprost niewyobrażalna.<br/>
							Tereska natrafiła w sieci na blog prowadzony przez młodziutką dziewczynę, która przeszła przez cały ten proces i obecnie znajduje się w fazie "po-przeszczepieniowej". Paulina - nastoletnia autorka internetowego pamiętnika - postanowiła, że będzie zbierać opakowania po przyjmowanych medykamentach od pierwszego dnia pobytu w ośrodku transplantologii, zresztą, tym samym co Tereska. Po wypisie w dobie plus sześćdziesiąt trzy, czyli ponad dwa miesiące po przeszczepieniu zrobiła zdjęcie pokaźnego stosu pustych pudełeczek z nadrukowanymi obcobrzmiącymi nazwami"<br/>
						</span>
					}
					italic
					noSpace
				/>
				<Paragraph
					content={
						<span>
							cytat z książki ze str. 471<br/>
							O zbieraniu opakowań piszę na swoim blogu w <PageLink to="/" content="Leki po wypisie ze szpitala" /> (wpis z dnia 27 sierpnia 2017r.)
						</span>
					}
				/>
				<Separator />
				<Paragraph
					content={
						<span>
							Czuję, jakby to było przemyślane zagranie.<br/>
							Z jednej strony, moje imię gdzieś tam między wersami pojawiło się w książce, więc może myślał, że powinnam być kontent. Z drugiej strony, link do bloga w żadnym miejscu się nie pojawił, ani żadne podziękowanie, posłowie, czy chociażby wstęp od autora mówiący, że opierał się na przeżyciach konkretnej dziewczyny, toteż każdy czytający uzna, że Paulina - autorka bloga, jest postacią wymyśloną, nierealistyczną. Bo nikt przecież nie będzie się zastanawiał nad tym, skąd autor zaczerpnął informacje na temat białaczki czy przeszczepu. Ani też, czy sam przeżył tę chorobę czy może ktoś z jego najbliższych.
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							Tak się ludzi nie traktuje.<br/>
							It's not fair.
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							Myślał, że jestem<br/>
							słaba?<br/>
							młoda?<br/>
							naiwna?
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							Nie wiem.
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							Może i mam dobre serce, ale i niespotykanie silną osobowość.<br/>
							Szkoda, że tego jeszcze nie zauważył.
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							W dzisiejszym świecie ludzie za bardzo skupiają się na sobie i dążeniu do własnych celów...
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							Całą tę sytuację pozostawiam do interpretacji czytającym...
						</span>
					}
					underline
				/>
				<Paragraph
					content={
						<span>
							P.S.<br/>
							Niedawno skontaktowała się ze mną kolejna pisarka z propozycją współpracy, odmówiłam jej.<br/>
							Nie potrafię po raz kolejny zaufać.<br/>
							Prędzej wydam własną książkę.<br/>
							Jednak jestem wdzięczna za możliwość rozmowy z nią.<br/>
							Wszystko w życiu dzieje się po coś.
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							P.S.2
							Napisałam do Marcina, by wyjaśnił mi tę sytuację.<br/>
							Przeprosił mnie w prywatnej korespondencji. Tłumacząc się wydawnictwem lawirował:<br/>
						</span>
					}
					noSpace
				/>
				<Paragraph
					content={
						<span>
							"Nie ma wzmianki, bo wydawnictwo nie wyraziło na to zgody. (…) Być może w dodruku będzie się dało"
						</span>
					}
					italic
				/>
				<Paragraph
					content={
						<span>
							edit <br/>
							Postanowiłam poznać stanowisko wydawnictwa w tej sprawie, mam już odpowiedź:<br/>
							<Italic content={
									<span>
										jest nam bardzo przykro (…), niemniej w żadnym nie przyczyniliśmy się do tego naszym działaniem czy zaniechaniem. (…) Nigdy nie uniemożliwiamy Autorom zawierania w swoich dziełach podziękowań (…)."
									</span>
								} 
							/>
						</span>
					}
				/>
				<Paragraph
					content={
						<span>
							edit<br/>
							Dnia 4 grudnia 2019r. M. Ziernicki opublikował <WebLink content="publiczne przeprosiny" href="https://m.facebook.com/story.php?story_fbid=136746844407946&id=101245871291377"/>.
						</span>
					}
				/>
			</ContentElement>
		);
	}
}

export default Content