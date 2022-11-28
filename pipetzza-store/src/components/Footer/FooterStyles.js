import styled from 'styled-components';

export const Box = styled.div`
padding: 60px 0;
background: #A5A79A;
bottom: 0;
width: 100%;
border-top: 1px solid #E7E7E7;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
border-radius: 0px 0px 10px 10px;


@media (max-width: 100px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	border-radius: 10px;
	background: #A5A79A;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;

`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));

}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;


&:hover {
	color: yellow;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;

`;
