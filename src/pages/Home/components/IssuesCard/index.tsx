import { IssuesCardContainer, IssuesTitle } from './styles'

export function IssuesCard() {
  return (
    <IssuesCardContainer>
      <div>
        <IssuesTitle>
          <h2>JavaScript data types and data structures</h2>
          <span>Há 1 dia</span>
        </IssuesTitle>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned.
        </p>
      </div>
    </IssuesCardContainer>
  )
}
